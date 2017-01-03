$(function() {
    // Make an Ajax request to the "Report Card URL"
    $.ajax({
        url: 'https://www.codeschool.com/users/stanleyhlng.json',
        dataType: 'jsonp',
        success: function (response) {
            // handle response
            // console.log(response);
            var $badges = $('#badges');
            response.courses.completed.forEach(function eachCource(course) {

                // An Element per Completed Course
                var $course = $('<div></div>')
                    .addClass('course');
                $badges.append($course);

                // Adding Course Titles
                var $title = $('<h3/>')
                    .append(course.title);
                $course.append($title);

                // Adding Course Images
                var $badge = $('<img/>')
                    .attr('src', course.badge);
                $course.append($badge);

                // Adding Course Buttons
                var $link = $('<a />')
                    .addClass('btn btn-primary')
                    .attr('target', '_blank')
                    .attr('href', course.url)
                    .append('See Course');
                $course.append($link);

                // console.log($('<div />').append($course.clone()).html());
            });
        }
    });
});
