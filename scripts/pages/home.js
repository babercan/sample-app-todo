/*
  HomePage Class, extends from PageLayout because this is the layout 
  bestpractices and it containes include commons parts of different pages.
*/

const PageLayout = require("./page-layout.js");
const Router     = require("../app/core/router.js");
const TasksBlock = require("./block/home/tasks-block.js");
const SMFConsole = require("../app/core/log.js");


var HomePage = function() {
  // calls super class contructor
  PageLayout.apply(this, [{
      name: "homePage"
    , fillColor: "#ffffff"
  }]);
  
  try{
    const tasksBlock = new TasksBlock();
    this.add(tasksBlock);
    
    const newTaskButton = new SMF.UI.Image({
        image: "fab.png"
      , imageFillType: SMF.UI.ImageFillType.AUTOSIZE
      , left: "80%"
      , top: "26%"
      , onTouch: function(e){
        Router.go("todo/new");
      }
    });
    
    this.add(newTaskButton);
    
    // this.add(todayBar)
  } catch(e) {
    SMFConsole.error("[HomePage]", e);
  }
};

HomePage.prototype = Object.create(PageLayout.prototype);

module.exports = HomePage;