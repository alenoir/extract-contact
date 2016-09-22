function extractEmails(string) {
  var re = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/g;
  var emails = string.match(re) || [];
  return emails.filter(function(elem, pos) {
    return emails.indexOf(elem) == pos;
  });
}

function extractUrls(string) {
  var re = /(https?:\/\/(?:www\.|(?!www))[^\s!>!<\.]+\.[^\s!>!<]{2,}|www\.[^\s!>!<]+\.[^\s!>!<]{2,})/gi;
  var urls = string.match(re) || [];
  return urls.filter(function(elem, pos) {
    return urls.indexOf(elem) == pos;
  });
}

module.exports = function(string) {
  var result = {
    emails: extractEmails(string),
    urls: extractUrls(string)
  };

  return result;
}
