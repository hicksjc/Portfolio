var EventsyContent = `<p>This is Eventsy</p>
<img src="" alt="Eventsy Image 2">
<p>Eventsy example</p>
<p>eventsy example</p>`;

var TravelContent = `<p>This is Travelfly</p>
<img src="" alt="Travel image 2">
<p>This is Travelfly</p>
<p>This is Travelfly</p>`;

export function getPageContent(pageId, callback){
    $(".portfolio-item-individual").html(eval(pageId));
    if(callback){
        callback();
    }
}