<template>
<div>
    <h1>Anagram Hunt</h1>
    <div class="row">
       <div class="col">
         <label :for="id">{{label}}</label>
       </div>
       <div class="col">
    <select class="form-control" :id="id" :value="currentValue" 
      @input="$emit('update:currentValue', $event.target.value)">
       <option selected disabled value=''>Select Option</option>
      <option v-for="option in options" :key="option[1]"
        :value="option[1]">
        {{option[0]}}
      </option>
    </select>
    </div>
  </div>
    </div>

    
   
    <div class="row">
        1. Choose Word Length.
    </div>
    <div class="row">
        2. Press &nbsp; <strong> Play!</strong>
    </div>
    <div class="row">
        3. How many anagrams can you find in a minute?
    </div>



</template>

<script>
  export default {
    name: 'SelectInput',
    props: {
      options: Array,
      label: String,
      id: String,
      currentValue: String
      
      
    },


    data: function() {
    return {
        
          }
    }
  }
  
</script>