module.exports = function toReadable(number) {
    var string = number.toString(), units, tens, start, hundred, end, chunks, chunk;
    if (parseInt(string) === 0) {
    return 'zero';
    }
    units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
   
}
