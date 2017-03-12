export function getAvailabilityStatus(serviceList: Array<any>, serviceCodes: Array<String>) {
	const searchedServices = serviceList
		.filter(service => {
			return serviceCodes.indexOf(service.service.serviceCode) >= 0;
		});

	const availableSearchedServices = searchedServices
		.filter((service) => service.isAvailable);

	return availableSearchedServices.length === 0 ?
		'none' :
		(availableSearchedServices.length === searchedServices.length) ? 'all' : 'some';
}
