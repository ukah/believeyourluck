gdjs._28961_21517_12398_12471_12540_12531Code = {};
gdjs._28961_21517_12398_12471_12540_12531Code.GDPlayerObjects1= [];
gdjs._28961_21517_12398_12471_12540_12531Code.GDPlayerObjects2= [];
gdjs._28961_21517_12398_12471_12540_12531Code.GDGoldCoinObjects1= [];
gdjs._28961_21517_12398_12471_12540_12531Code.GDGoldCoinObjects2= [];
gdjs._28961_21517_12398_12471_12540_12531Code.GDDinoMortObjects1= [];
gdjs._28961_21517_12398_12471_12540_12531Code.GDDinoMortObjects2= [];
gdjs._28961_21517_12398_12471_12540_12531Code.GDsetTimerObjects1= [];
gdjs._28961_21517_12398_12471_12540_12531Code.GDsetTimerObjects2= [];
gdjs._28961_21517_12398_12471_12540_12531Code.GDTextSampleObjects1= [];
gdjs._28961_21517_12398_12471_12540_12531Code.GDTextSampleObjects2= [];

gdjs._28961_21517_12398_12471_12540_12531Code.conditionTrue_0 = {val:false};
gdjs._28961_21517_12398_12471_12540_12531Code.condition0IsTrue_0 = {val:false};
gdjs._28961_21517_12398_12471_12540_12531Code.condition1IsTrue_0 = {val:false};


gdjs._28961_21517_12398_12471_12540_12531Code.mapOfGDgdjs_46_9528961_9521517_9512398_9512471_9512540_9512531Code_46GDGoldCoinObjects1Objects = Hashtable.newFrom({"GoldCoin": gdjs._28961_21517_12398_12471_12540_12531Code.GDGoldCoinObjects1});
gdjs._28961_21517_12398_12471_12540_12531Code.mapOfGDgdjs_46_9528961_9521517_9512398_9512471_9512540_9512531Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs._28961_21517_12398_12471_12540_12531Code.GDPlayerObjects1});
gdjs._28961_21517_12398_12471_12540_12531Code.mapOfGDgdjs_46_9528961_9521517_9512398_9512471_9512540_9512531Code_46GDGoldCoinObjects1Objects = Hashtable.newFrom({"GoldCoin": gdjs._28961_21517_12398_12471_12540_12531Code.GDGoldCoinObjects1});
gdjs._28961_21517_12398_12471_12540_12531Code.mapOfGDgdjs_46_9528961_9521517_9512398_9512471_9512540_9512531Code_46GDGoldCoinObjects1Objects = Hashtable.newFrom({"GoldCoin": gdjs._28961_21517_12398_12471_12540_12531Code.GDGoldCoinObjects1});
gdjs._28961_21517_12398_12471_12540_12531Code.asyncCallback8264332 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "START_SCENE", true);
}}
gdjs._28961_21517_12398_12471_12540_12531Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs._28961_21517_12398_12471_12540_12531Code.asyncCallback8264332(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs._28961_21517_12398_12471_12540_12531Code.eventsList1 = function(runtimeScene) {

{


gdjs._28961_21517_12398_12471_12540_12531Code.condition0IsTrue_0.val = false;
{
gdjs._28961_21517_12398_12471_12540_12531Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs._28961_21517_12398_12471_12540_12531Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("setTimer"), gdjs._28961_21517_12398_12471_12540_12531Code.GDsetTimerObjects1);
{for(var i = 0, len = gdjs._28961_21517_12398_12471_12540_12531Code.GDsetTimerObjects1.length ;i < len;++i) {
    gdjs._28961_21517_12398_12471_12540_12531Code.GDsetTimerObjects1[i].setString("微妙にコインを取るのが難しいゲーム" + gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "timestamp")));
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "timestamp"));
}}

}


{


gdjs._28961_21517_12398_12471_12540_12531Code.condition0IsTrue_0.val = false;
{
gdjs._28961_21517_12398_12471_12540_12531Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs._28961_21517_12398_12471_12540_12531Code.condition0IsTrue_0.val) {
gdjs._28961_21517_12398_12471_12540_12531Code.GDGoldCoinObjects1.length = 0;

{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Enemy_timer");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._28961_21517_12398_12471_12540_12531Code.mapOfGDgdjs_46_9528961_9521517_9512398_9512471_9512540_9512531Code_46GDGoldCoinObjects1Objects, gdjs.random(gdjs.evtTools.window.getWindowInnerWidth()), gdjs.random(gdjs.evtTools.window.getWindowInnerHeight()), "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GoldCoin"), gdjs._28961_21517_12398_12471_12540_12531Code.GDGoldCoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._28961_21517_12398_12471_12540_12531Code.GDPlayerObjects1);

gdjs._28961_21517_12398_12471_12540_12531Code.condition0IsTrue_0.val = false;
{
gdjs._28961_21517_12398_12471_12540_12531Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs._28961_21517_12398_12471_12540_12531Code.mapOfGDgdjs_46_9528961_9521517_9512398_9512471_9512540_9512531Code_46GDPlayerObjects1Objects, gdjs._28961_21517_12398_12471_12540_12531Code.mapOfGDgdjs_46_9528961_9521517_9512398_9512471_9512540_9512531Code_46GDGoldCoinObjects1Objects, false, runtimeScene, false);
}if (gdjs._28961_21517_12398_12471_12540_12531Code.condition0IsTrue_0.val) {
/* Reuse gdjs._28961_21517_12398_12471_12540_12531Code.GDGoldCoinObjects1 */
gdjs.copyArray(runtimeScene.getObjects("setTimer"), gdjs._28961_21517_12398_12471_12540_12531Code.GDsetTimerObjects1);
{for(var i = 0, len = gdjs._28961_21517_12398_12471_12540_12531Code.GDGoldCoinObjects1.length ;i < len;++i) {
    gdjs._28961_21517_12398_12471_12540_12531Code.GDGoldCoinObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs._28961_21517_12398_12471_12540_12531Code.GDsetTimerObjects1.length ;i < len;++i) {
    gdjs._28961_21517_12398_12471_12540_12531Code.GDsetTimerObjects1[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.runtimeScene.getTime(runtimeScene, "timestamp")));
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "GAME OVER_scene", true);
}}

}


{


gdjs._28961_21517_12398_12471_12540_12531Code.condition0IsTrue_0.val = false;
{
gdjs._28961_21517_12398_12471_12540_12531Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs._28961_21517_12398_12471_12540_12531Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._28961_21517_12398_12471_12540_12531Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs._28961_21517_12398_12471_12540_12531Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._28961_21517_12398_12471_12540_12531Code.GDPlayerObjects1[i].addForceTowardPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 1, 1);
}
}}

}


{


gdjs._28961_21517_12398_12471_12540_12531Code.condition0IsTrue_0.val = false;
{
gdjs._28961_21517_12398_12471_12540_12531Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Enemy_timer") >= 5;
}if (gdjs._28961_21517_12398_12471_12540_12531Code.condition0IsTrue_0.val) {
gdjs._28961_21517_12398_12471_12540_12531Code.GDGoldCoinObjects1.length = 0;

{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Enemy_timer");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs._28961_21517_12398_12471_12540_12531Code.mapOfGDgdjs_46_9528961_9521517_9512398_9512471_9512540_9512531Code_46GDGoldCoinObjects1Objects, gdjs.random(gdjs.evtTools.window.getWindowInnerWidth()), gdjs.random(gdjs.evtTools.window.getWindowInnerHeight()), "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._28961_21517_12398_12471_12540_12531Code.GDPlayerObjects1);

gdjs._28961_21517_12398_12471_12540_12531Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._28961_21517_12398_12471_12540_12531Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs._28961_21517_12398_12471_12540_12531Code.GDPlayerObjects1[i].getX() <= 0 ) {
        gdjs._28961_21517_12398_12471_12540_12531Code.condition0IsTrue_0.val = true;
        gdjs._28961_21517_12398_12471_12540_12531Code.GDPlayerObjects1[k] = gdjs._28961_21517_12398_12471_12540_12531Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs._28961_21517_12398_12471_12540_12531Code.GDPlayerObjects1.length = k;}if (gdjs._28961_21517_12398_12471_12540_12531Code.condition0IsTrue_0.val) {
/* Reuse gdjs._28961_21517_12398_12471_12540_12531Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs._28961_21517_12398_12471_12540_12531Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._28961_21517_12398_12471_12540_12531Code.GDPlayerObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs._28961_21517_12398_12471_12540_12531Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._28961_21517_12398_12471_12540_12531Code.GDPlayerObjects1[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._28961_21517_12398_12471_12540_12531Code.GDPlayerObjects1);

gdjs._28961_21517_12398_12471_12540_12531Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._28961_21517_12398_12471_12540_12531Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs._28961_21517_12398_12471_12540_12531Code.GDPlayerObjects1[i].getX() >= gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) ) {
        gdjs._28961_21517_12398_12471_12540_12531Code.condition0IsTrue_0.val = true;
        gdjs._28961_21517_12398_12471_12540_12531Code.GDPlayerObjects1[k] = gdjs._28961_21517_12398_12471_12540_12531Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs._28961_21517_12398_12471_12540_12531Code.GDPlayerObjects1.length = k;}if (gdjs._28961_21517_12398_12471_12540_12531Code.condition0IsTrue_0.val) {
/* Reuse gdjs._28961_21517_12398_12471_12540_12531Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs._28961_21517_12398_12471_12540_12531Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._28961_21517_12398_12471_12540_12531Code.GDPlayerObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs._28961_21517_12398_12471_12540_12531Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._28961_21517_12398_12471_12540_12531Code.GDPlayerObjects1[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._28961_21517_12398_12471_12540_12531Code.GDPlayerObjects1);

gdjs._28961_21517_12398_12471_12540_12531Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._28961_21517_12398_12471_12540_12531Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs._28961_21517_12398_12471_12540_12531Code.GDPlayerObjects1[i].getY() <= 0 ) {
        gdjs._28961_21517_12398_12471_12540_12531Code.condition0IsTrue_0.val = true;
        gdjs._28961_21517_12398_12471_12540_12531Code.GDPlayerObjects1[k] = gdjs._28961_21517_12398_12471_12540_12531Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs._28961_21517_12398_12471_12540_12531Code.GDPlayerObjects1.length = k;}if (gdjs._28961_21517_12398_12471_12540_12531Code.condition0IsTrue_0.val) {
/* Reuse gdjs._28961_21517_12398_12471_12540_12531Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs._28961_21517_12398_12471_12540_12531Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._28961_21517_12398_12471_12540_12531Code.GDPlayerObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs._28961_21517_12398_12471_12540_12531Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._28961_21517_12398_12471_12540_12531Code.GDPlayerObjects1[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs._28961_21517_12398_12471_12540_12531Code.GDPlayerObjects1);

gdjs._28961_21517_12398_12471_12540_12531Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._28961_21517_12398_12471_12540_12531Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs._28961_21517_12398_12471_12540_12531Code.GDPlayerObjects1[i].getY() >= gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) ) {
        gdjs._28961_21517_12398_12471_12540_12531Code.condition0IsTrue_0.val = true;
        gdjs._28961_21517_12398_12471_12540_12531Code.GDPlayerObjects1[k] = gdjs._28961_21517_12398_12471_12540_12531Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs._28961_21517_12398_12471_12540_12531Code.GDPlayerObjects1.length = k;}if (gdjs._28961_21517_12398_12471_12540_12531Code.condition0IsTrue_0.val) {
/* Reuse gdjs._28961_21517_12398_12471_12540_12531Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs._28961_21517_12398_12471_12540_12531Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._28961_21517_12398_12471_12540_12531Code.GDPlayerObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs._28961_21517_12398_12471_12540_12531Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs._28961_21517_12398_12471_12540_12531Code.GDPlayerObjects1[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2,gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) / 2);
}
}}

}


{


gdjs._28961_21517_12398_12471_12540_12531Code.condition0IsTrue_0.val = false;
{
gdjs._28961_21517_12398_12471_12540_12531Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "r");
}if (gdjs._28961_21517_12398_12471_12540_12531Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs._28961_21517_12398_12471_12540_12531Code.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs._28961_21517_12398_12471_12540_12531Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._28961_21517_12398_12471_12540_12531Code.GDPlayerObjects1.length = 0;
gdjs._28961_21517_12398_12471_12540_12531Code.GDPlayerObjects2.length = 0;
gdjs._28961_21517_12398_12471_12540_12531Code.GDGoldCoinObjects1.length = 0;
gdjs._28961_21517_12398_12471_12540_12531Code.GDGoldCoinObjects2.length = 0;
gdjs._28961_21517_12398_12471_12540_12531Code.GDDinoMortObjects1.length = 0;
gdjs._28961_21517_12398_12471_12540_12531Code.GDDinoMortObjects2.length = 0;
gdjs._28961_21517_12398_12471_12540_12531Code.GDsetTimerObjects1.length = 0;
gdjs._28961_21517_12398_12471_12540_12531Code.GDsetTimerObjects2.length = 0;
gdjs._28961_21517_12398_12471_12540_12531Code.GDTextSampleObjects1.length = 0;
gdjs._28961_21517_12398_12471_12540_12531Code.GDTextSampleObjects2.length = 0;

gdjs._28961_21517_12398_12471_12540_12531Code.eventsList1(runtimeScene);

return;

}

gdjs['_28961_21517_12398_12471_12540_12531Code'] = gdjs._28961_21517_12398_12471_12540_12531Code;
