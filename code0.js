gdjs.START_95SCENECode = {};
gdjs.START_95SCENECode.GDstart_95textObjects1= [];
gdjs.START_95SCENECode.GDstart_95textObjects2= [];
gdjs.START_95SCENECode.GDTitleObjects1= [];
gdjs.START_95SCENECode.GDTitleObjects2= [];

gdjs.START_95SCENECode.conditionTrue_0 = {val:false};
gdjs.START_95SCENECode.condition0IsTrue_0 = {val:false};
gdjs.START_95SCENECode.condition1IsTrue_0 = {val:false};
gdjs.START_95SCENECode.condition2IsTrue_0 = {val:false};


gdjs.START_95SCENECode.mapOfGDgdjs_46START_9595SCENECode_46GDstart_9595textObjects1Objects = Hashtable.newFrom({"start_text": gdjs.START_95SCENECode.GDstart_95textObjects1});
gdjs.START_95SCENECode.asyncCallback7942732 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "無名のシーン", false);
}}
gdjs.START_95SCENECode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.START_95SCENECode.asyncCallback7942732(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.START_95SCENECode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("start_text"), gdjs.START_95SCENECode.GDstart_95textObjects1);

gdjs.START_95SCENECode.condition0IsTrue_0.val = false;
gdjs.START_95SCENECode.condition1IsTrue_0.val = false;
{
gdjs.START_95SCENECode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.START_95SCENECode.mapOfGDgdjs_46START_9595SCENECode_46GDstart_9595textObjects1Objects, runtimeScene, true, false);
}if ( gdjs.START_95SCENECode.condition0IsTrue_0.val ) {
{
gdjs.START_95SCENECode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.START_95SCENECode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.START_95SCENECode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.START_95SCENECode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.START_95SCENECode.GDstart_95textObjects1.length = 0;
gdjs.START_95SCENECode.GDstart_95textObjects2.length = 0;
gdjs.START_95SCENECode.GDTitleObjects1.length = 0;
gdjs.START_95SCENECode.GDTitleObjects2.length = 0;

gdjs.START_95SCENECode.eventsList1(runtimeScene);

return;

}

gdjs['START_95SCENECode'] = gdjs.START_95SCENECode;
