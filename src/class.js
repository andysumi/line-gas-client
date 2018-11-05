(function (global) {
  var LineClient = (function () {
    function LineClient(token) {
      this.apiUrl = 'https://api.line.me/v2';
      this.headers = { 'Authorization': 'Bearer ' + token };

      if (!token) throw new Error('"token"は必須です');
    }

    LineClient.prototype.sendMessageToSingleUser = function (to, messages) {
      return this.fetch_('/bot/message/push', {
        'method': 'post',
        'payload': {
          'to': to,
          'messages': messages
        }
      });
    };

    LineClient.prototype.sendMessageToMultipleUsers = function (to, messages) {
      return this.fetch_('/bot/message/multicast', {
        'method': 'post',
        'payload': {
          'to': to,
          'messages': messages
        }
      });
    };

    LineClient.prototype.sendReplyMessage = function (replyToken, messages) {
      return this.fetch_('/bot/message/reply', {
        'method': 'post',
        'payload': {
          'replyToken': replyToken,
          'messages': messages
        }
      });
    };

    LineClient.prototype.fetch_ = function (endPoint, options) {
      var url = this.apiUrl + endPoint;
      var response = UrlFetchApp.fetch(url, {
        'method': options.method,
        'muteHttpExceptions': true,
        'contentType': 'application/json; charset=utf-8',
        'headers': this.headers,
        'payload': JSON.stringify(options.payload)
      });
      return JSON.parse(response.getContentText());
    };

    return LineClient;
  })();
  return global.LineClient = LineClient;
})(this);
