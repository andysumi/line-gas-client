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
 * @param {Object} messages 【必須】送信するメッセージ
 * @return {Object} 結果のオブジェクト
 */
function sendMessageToSingleUser(to, messages) { // eslint-disable-line no-unused-vars
  throw new Error('このメソッドは直接呼び出せません。createメソッドで取得したインスタンスより呼び出してください。');
}
