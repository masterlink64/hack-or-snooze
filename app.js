// wrap document ready function around my whole JS/jquery to wait for DOM to load
// just in case and good practice? can also short had as $(function() {});
$(document).ready(() => {
    // using an event listener on click, toggle class between far and fas
    // come back to this event listener for the bonus
    // Is this recommended? creating a function for this purpose to make smaller digestable code?
    function favoriteStar() {
        // trying event delegation
        // instead of assigning event listener to EVERY star
          // do it to only the parent and add a second selector parameter to listen 
        $('.stories-list').on("click", "i", function(event) {
            //let star = event.target
            $(this).toggleClass("far fas");      
        });
    }; // can I write IIFE here?
    // function that will prevent default when you click the submit btn in the form
    // and instead add a li element to the ordered list
    // will need to grab values from form
    function addStory(event) {
        // click is a jQuery for another way of saying on click or evenlistener for click
        $(".btn.submit-story").click(function(event) {
            event.preventDefault();
            let storyVal = $('#story').val();
            let dataVal = $('#data').val();
            // console.log($("#story").val());
            // console.log($("#data").val());
            //adding story and link to list
            // will need to use href to link text
            $('.stories-list').append(`<li class="story"><i class="far fa-star"></i> <a href="${dataVal}">${storyVal}</a></li>`);
            // adding event listener to new stories only
            // fix favorite star later, right now it is only adding event listener to new and toggling off the listener
              // for previous stories
            //favoriteStar();
            // clarify why this works
            // everything still works without prevent default?
            // reset form to blank
            $('#submit-form').each(function(){
                this.reset();
            });
        })
    };
    // write a function to hide current list and show favorite list
    function showFavorite() {
        let favorite = $('.favoriteNav');
        let allStories = $('.all-stories');
        // when you click the favorite text on the nav bar do certain steps
          // hide current content
          // display new ordered list
        favorite.click(function(event) {
            allStories.hide();
        })
    }
    addStory();
    favoriteStar();
    showFavorite();
});