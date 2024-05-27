(() => {
   
   let to_do_list_array = [];

   const form = document.querySelector(".form");
   const input= document.querySelector(".form_input");
   const ul = document.querySelector(".to_do_list");

   form.addEventListener("submit", (e) => {
        e.preventDefault();

        let item_id = String(Date.now());
        let to_do_item = input.value;

        addItemToDOM(item_id, to_do_item);
        addItemToArray(item_id, to_do_item);

        input.value = "";
   });

   ul.addEventListener("click", (e) => {
     let id = e.target.getAttribute("data-id");
     if(!id) return;

     removeItemFromDOM(id);
     removeItemFromArray(id);

   });

   function addItemToDOM(item_id, to_do_item){
    const li =document.createElement("li");
    li.setAttribute("data-id", item_id);
    li.innerText = to_do_item;
    ul.appendChild(li);

   }

   function addItemToArray(item_id, to_do_item){
    to_do_list_array.push(item_id, to_do_item);
    console.log(to_do_list_array);
   }

   function removeItemFromDOM(id){
    var li = document.querySelector('[data-id="' + id + '"]');
    ul.removeChild(li);
   }

   function removeItemFromArray(id){
    to_do_list_array = to_do_list_array.filter((item) => item.item_id !== id);
    console.log(to_do_list_array);
   }

   

      

})();