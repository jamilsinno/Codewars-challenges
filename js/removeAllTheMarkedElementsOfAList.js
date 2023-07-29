Array.prototype.remove_ = function(integer_list, values_list){
    return integer_list.filter(c => !values_list.includes(c))
  }