module.exports = function toReadable(number) {
  var string = number.toString(), units, tens, start, hundred, end, chunks, chunk;
  if (parseInt(string) === 0) {
  return 'zero';
  }
  units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  start = string;
  if (start<20){
      return units[string]
  }
  if (start>19 && start<100){ 
    chunks=[];
    chunks=string.split('');
    chunk=chunks[0];
    end=[];
    end=chunks[1];
  return `${tens[chunk]} ${units[end]}`
  }
if (start>99 && start<1000){
    chunks=[];
    chunks=string.split('');
    chunk=chunks[1];
    end=[];
    end=chunks[2];
hundred=[];
hundred=chunks[0];
  return `${units[hundred]} hundred ${tens[chunk]} ${units[end]}`
}
}
