function sub(...arr){
  let total;
  arr.map(el =>{
    typeof total === 'undefined' ? total = el : total -= el;
  });
    
 return total;
}

sub(9); //9
sub(9,4); //5
sub(14,2,6); //6

