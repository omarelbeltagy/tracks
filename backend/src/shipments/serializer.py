from rest_framework import serializers 
from . models import Shipment

class ReactSerializer(serializers.ModelSerializer): 
	class Meta: 
		model = Shipment
		fields = ['cName', 'co2', 'distance', 'avgWeight','intensityFactor'] 
