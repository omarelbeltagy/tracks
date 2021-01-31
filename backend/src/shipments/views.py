from django.shortcuts import render
from rest_framework.views import APIView 
from . models import *
from rest_framework.response import Response 
from . serializer import *

# Create your views here. 

class ReactView(APIView): 
	
	serializer_class = ReactSerializer 
	ordering_fields = '__all__'

	def get(self, request): 
		queryset = Shipment.objects.all()
		startDate = self.request.query_params.get('startDate', None)
		endDate = self.request.query_params.get('endDate', None)
		typeOfCalculation = self.request.query_params.get('typeOfCalculation', None)
		goodsType = self.request.query_params.get('goodsType', None)
		startCity = self.request.query_params.get('startCity', None)
		endCity = self.request.query_params.get('endCity', None)
		orderParameter = self.request.query_params.get('orderParameter', None)
		pageNumber = self.request.query_params.get('pageNumber', None)


		queryset = queryset.filter(start_time__gte = startDate)
		queryset =  queryset.filter(end_time__lte = endDate)

		if typeOfCalculation is not None:
		 	queryset = queryset.filter(type_of_calculations = typeOfCalculation)

		if goodsType is not None:
		 	queryset = queryset.filter(type_of_goods = goodsType)

		if startCity is not None:
		 	queryset = queryset.filter(start_city = startCity)

		if endCity is not None:
		 	queryset = queryset.filter(end_city = endCity)

		if orderParameter is not None:
			queryset = queryset.order_by(orderParameter)


		entry = [ {"cName": entry.id,"co2": entry.total_co2_emitted,
		"distance": entry.travelled_distance, "avgWeight": entry.weight ,
		"intensityFactor": ((entry.total_co2_emitted/entry.weight)/entry.travelled_distance),
		"startDate": entry.start_time, "endDate": entry.end_time, "startCity": entry.start_city,
		"endCity": entry.end_city, "typeOfCalculation": entry.type_of_calculations}
		for entry in queryset] 
		return Response(entry) 



