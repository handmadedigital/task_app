export default function(){

	this.transition(
	    this.hasClass('panel'),
	    this.toValue(true),
	    this.use('toDown'),
	    this.reverse('toUp')
  	);

  	this.transition(
	    this.hasClass('display'),
	    this.toValue(true),
	    this.use('toLeft', {duration: 500}),
	    this.reverse('toRight', {duration: 500})
  	);

  	this.transition(
    	this.fromRoute('address-book.home'),
    	this.toRoute('address-book.details'),
    	this.use('toLeft'),
    	this.reverse('toRight')
  	);
};