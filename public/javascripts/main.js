let validateForm = () => {
    if (!document.forms["myForm"]["title"].value){
        alert('Title is empty');
        return false;
    }
    if (!document.forms["myForm"]["price"].value){
        alert('Price is empty');
        return false;
    } else if (isNaN(document.forms["myForm"]["price"].value)){
        alert('Price is incorrect');
        return false;    
    } else {
        document.forms["myForm"]["price"].value = (document.forms["myForm"]["price"].value * 1).toFixed(2); 
    }
    if (!document.forms["myForm"]["description"].value){
        alert('Description is empty');
        return false;
    }
    if (!document.forms["myForm"]["condition"].value){
        alert('Condition is empty');
        return false;
    }
  }

