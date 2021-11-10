$(document).ready(function(){

  var filterByStatus = function($status){
    if($status == "all"){
      $(".card").show()
    }
    else{
      $(".card").hide();
      $(".card[data-project-status='" + $status +"']").show();
    }
  }

  $("#all_projects_filter").on("click", function(){
    $( this ).addClass("btn-primary");
    $( this ).removeClass("btn-outline-primary");
    $("#active_projects_filter").addClass("btn-outline-info");
    $("#active_projects_filter").removeClass("btn-info");
    $("#completed_projects_filter").addClass("btn-outline-success");
    $("#completed_projects_filter").removeClass("btn-success");
    filterByStatus("all");
  });

  $("#active_projects_filter").on("click", function(){
    $( this ).addClass("btn-info");
    $( this ).removeClass("btn-outline-info");
    $("#all_projects_filter").addClass("btn-outline-primary");
    $("#all_projects_filter").removeClass("btn-primary");
    $("#completed_projects_filter").addClass("btn-outline-success");
    $("#completed_projects_filter").removeClass("btn-success");
    filterByStatus("active");
  });

  $("#completed_projects_filter").on("click", function(){
    $( this ).addClass("btn-success");
    $( this ).removeClass("btn-outline-success");
    $("#all_projects_filter").addClass("btn-outline-primary");
    $("#all_projects_filter").removeClass("btn-primary");
    $("#active_projects_filter").addClass("btn-outline-info");
    $("#active_projects_filter").removeClass("btn-info");
    filterByStatus("completed");
  });


});
