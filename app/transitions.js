export default function(){
  this.transition(
    this.fromRoute('address-book.home'),
    this.toRoute('address-book.details'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
};