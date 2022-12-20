gdjs.GAME_32OVER_95sceneCode = {};
gdjs.GAME_32OVER_95sceneCode.GDGAMEOVER_95textObjects1= [];
gdjs.GAME_32OVER_95sceneCode.GDGAMEOVER_95textObjects2= [];
gdjs.GAME_32OVER_95sceneCode.GDNewTextObjects1= [];
gdjs.GAME_32OVER_95sceneCode.GDNewTextObjects2= [];
gdjs.GAME_32OVER_95sceneCode.GDNewText2Objects1= [];
gdjs.GAME_32OVER_95sceneCode.GDNewText2Objects2= [];
gdjs.GAME_32OVER_95sceneCode.GDNewSpriteObjects1= [];
gdjs.GAME_32OVER_95sceneCode.GDNewSpriteObjects2= [];
gdjs.GAME_32OVER_95sceneCode.GDscoreboardObjects1= [];
gdjs.GAME_32OVER_95sceneCode.GDscoreboardObjects2= [];

gdjs.GAME_32OVER_95sceneCode.conditionTrue_0 = {val:false};
gdjs.GAME_32OVER_95sceneCode.condition0IsTrue_0 = {val:false};
gdjs.GAME_32OVER_95sceneCode.condition1IsTrue_0 = {val:false};
gdjs.GAME_32OVER_95sceneCode.condition2IsTrue_0 = {val:false};


gdjs.GAME_32OVER_95sceneCode.mapOfGDgdjs_46GAME_9532OVER_9595sceneCode_46GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.GAME_32OVER_95sceneCode.GDNewSpriteObjects1});
gdjs.GAME_32OVER_95sceneCode.userFunc0x79e050 = function(runtimeScene, objects) {
"use strict";


// 最初のフレームだけで実行（つまりシーン開始時）。
if (runtimeScene.getTimeManager().isFirstFrame()) {

    //const val = {    "myRecord": {        "isNewRecord": false,        "rank": 5,        "score": 0    },    "ranking": [        {        "rank": 1,        "score": 1000,        "userName": "atsumalion",        "userId": 123456        },        {        "rank": 2,        "score": 500,        "userName": "atsumatiger",        "userId": 123457        },        {        "rank": 3,        "score": 100,        "userName": "atsumagorilla",        "userId": 123458        }    ],        "myBestRecord": {        "rank": 1,        "score": 1000,        "userName": "atsumalion",        "userId": 123456    },    "boardId": 1,    "boardName": "スコアボードの名前"    };
    /*
    objects.forEach(object =>{
        const sb = object;
        let nr = "";
        if(val["myRecord"]["isNewRecord"] == true){
            nr = "新記録！";
        }
        let ranks = "";
        val.ranking.forEach(obj =>{
            ranks = ranks + "【"+obj.rank + "】\t"+(obj.score/1000)+"秒 "+obj.userName+"さん\n";
        })
        sb.setString("今回の記録："+ "score" +nr + "\n" + ranks);
    })
*/

    var runtimeScene = runtimeScene;
    // var hoge = runtimeScene.getGame().getVariables().get("hoge");
    var timestamp = runtimeScene.getGame().getVariables().get("timestamp");
    console.log(timestamp.getValue());
    var date = Date.now();
    //0.999ms
    var score = (date - timestamp.getValue())/1000;
    console.log(score);
    if(window.RPGAtsumaru){
    window.RPGAtsumaru.scoreboards.setRecord(1, score*-1000)
        .catch(function(err) {
            switch(err.code) {
                case "BAD_REQUEST":
                // ゲーム側で何か間違えているとき＝指定したボードIDが大きすぎるかマイナスの場合などに発生
                /* エラーハンドリング処理 */
                break;
                case "INTERNAL_SERVER_ERROR":
                // サーバー側で何らかの問題＝通信不良やメンテ等で発生
                /* エラーハンドリング処理 */
                break;
            }
        })
    
    window.RPGAtsumaru.scoreboards.getRecords(1).then(function(v) { 
            var val = v;
            objects.forEach(object =>{
                const sb = object;// text object
                let nr = "";
                if(val.myBestRecord != null && val.myBestRecord.score > (score*1000)){
                    nr = "新記録！";
                }
                let ranks = "";
                val.ranking.forEach(obj =>{
                    ranks = ranks + "【"+obj.rank + "】\t"+(obj.score/-1000)+"秒 "+obj.userName+"さん\n";
                })
                sb.setString("今回の記録："+ score +"秒 " +nr + "\n" + ranks);
            })
            
        })
        .catch(function(err) {
            switch(err.code) {
                case "BAD_REQUEST":
                // ゲーム側で何か間違えているとき＝指定したボードIDが大きすぎるかマイナスの場合などに発生
                /* エラーハンドリング処理 */
                break;
                case "INTERNAL_SERVER_ERROR":
                // サーバー側で何らかの問題＝通信不良やメンテ等で発生
                /* エラーハンドリング処理 */
                break;
            }
        })
    }
}
};
gdjs.GAME_32OVER_95sceneCode.eventsList0 = function(runtimeScene) {

{


gdjs.GAME_32OVER_95sceneCode.condition0IsTrue_0.val = false;
{
gdjs.GAME_32OVER_95sceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GAME_32OVER_95sceneCode.condition0IsTrue_0.val) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.GAME_32OVER_95sceneCode.GDNewSpriteObjects1);

gdjs.GAME_32OVER_95sceneCode.condition0IsTrue_0.val = false;
gdjs.GAME_32OVER_95sceneCode.condition1IsTrue_0.val = false;
{
gdjs.GAME_32OVER_95sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.GAME_32OVER_95sceneCode.condition0IsTrue_0.val ) {
{
gdjs.GAME_32OVER_95sceneCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GAME_32OVER_95sceneCode.mapOfGDgdjs_46GAME_9532OVER_9595sceneCode_46GDNewSpriteObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.GAME_32OVER_95sceneCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "START_SCENE", true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("scoreboard"), gdjs.GAME_32OVER_95sceneCode.GDscoreboardObjects1);

var objects = [];
objects.push.apply(objects,gdjs.GAME_32OVER_95sceneCode.GDscoreboardObjects1);
gdjs.GAME_32OVER_95sceneCode.userFunc0x79e050(runtimeScene, objects);

}


};

gdjs.GAME_32OVER_95sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GAME_32OVER_95sceneCode.GDGAMEOVER_95textObjects1.length = 0;
gdjs.GAME_32OVER_95sceneCode.GDGAMEOVER_95textObjects2.length = 0;
gdjs.GAME_32OVER_95sceneCode.GDNewTextObjects1.length = 0;
gdjs.GAME_32OVER_95sceneCode.GDNewTextObjects2.length = 0;
gdjs.GAME_32OVER_95sceneCode.GDNewText2Objects1.length = 0;
gdjs.GAME_32OVER_95sceneCode.GDNewText2Objects2.length = 0;
gdjs.GAME_32OVER_95sceneCode.GDNewSpriteObjects1.length = 0;
gdjs.GAME_32OVER_95sceneCode.GDNewSpriteObjects2.length = 0;
gdjs.GAME_32OVER_95sceneCode.GDscoreboardObjects1.length = 0;
gdjs.GAME_32OVER_95sceneCode.GDscoreboardObjects2.length = 0;

gdjs.GAME_32OVER_95sceneCode.eventsList0(runtimeScene);

return;

}

gdjs['GAME_32OVER_95sceneCode'] = gdjs.GAME_32OVER_95sceneCode;
