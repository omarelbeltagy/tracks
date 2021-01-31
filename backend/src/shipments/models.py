from django.db import models
from pprint import pprint
count=0

class Shipment(models.Model):
	id = models.IntegerField(primary_key=True)
	total_co2_emitted = models.DecimalField(max_digits=17, decimal_places=13)
	travelled_distance = models.DecimalField(max_digits=17, decimal_places=14)
	weight = models.DecimalField(max_digits=17, decimal_places=15)
	type_of_calculations = models.CharField(max_length=7)
	type_of_goods = models.CharField(max_length=9) 
	start_city = models.CharField(max_length=9)#Google says the longest city name is of length 9
	end_city = models.CharField(max_length=9)
	start_time = models.DateTimeField(auto_now=False, auto_now_add=False)
	end_time = models.DateTimeField(auto_now=False, auto_now_add=False)

	class Meta:
		managed = False
		db_table = 'shipments'

	def __str__(self):
		return ("ID: "+ str(self.id))




