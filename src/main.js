/**
 * Line Clientのインスタンスを作成する
 * @param {String} token 【必須】アクセストークン
 * @return {LineClient} Line Clientのインスタンス
 */
function create(token) { // eslint-disable-line no-unused-vars
  return new LineClient(token);
}

/**
 * 一人のユーザにメッセージを送信する
 * https://developers.line.me/ja/reference/messaging-api/#anchor-0c00cb0f42b970892f7c3382f92620dca5a110fc
 * @param {String} to 【必須】送信先のID
 * @param {Object} messages 【必須】送信するメッセージ (最大5件)
 * @return {Object} 結果のオブジェクト
 */
function sendMessageToSingleUser(to, messages) { // eslint-disable-line no-unused-vars
  throw new Error('このメソッドは直接呼び出せません。createメソッドで取得したインスタンスより呼び出してください。');
}

/**
 * 複数のユーザにメッセージを送信する
 * https://developers.line.me/ja/reference/messaging-api/#anchor-fa99cafa93ac4294d83cd7b89b60c822c1dafa9b
 * @param {Array} to 【必須】送信先のIDの配列
 * @param {Object} messages 【必須】送信するメッセージ (最大5件) ※Flex Messageは送信できない
 * @return {Object} 結果のオブジェクト
 */
function sendMessageToMultipleUsers(to, messages) { // eslint-disable-line no-unused-vars
  throw new Error('このメソッドは直接呼び出せません。createメソッドで取得したインスタンスより呼び出してください。');
}

/**
 * 応答メッセージを送信する
 * https://developers.line.me/ja/reference/messaging-api/#anchor-36ddabf319927434df30f0a74e21ad2cc69f0013
 * @param {String} replyToken 【必須】Webhookで受信する応答トークン
 * @param {Object} messages 【必須】送信するメッセージ (最大5件)
 * @return {Object} 結果のオブジェクト
 */
function sendReplyMessage(replyToken, messages) { // eslint-disable-line no-unused-vars
  throw new Error('このメソッドは直接呼び出せません。createメソッドで取得したインスタンスより呼び出してください。');
}
