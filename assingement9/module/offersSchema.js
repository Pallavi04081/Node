const mongoose = require('mongoose')


const offers = new mongoose.Schema({
        offer_Id:{
         type:String
       },
       offer_title:{
       type:String
       },
       offer_description:{
       type:String
       },
       offer_Image:{
        contentType : String
       },
       offer_sort_order:Number,
       content:[
        {
         quantity:Number        
        },
        {
        quantity:Number        
        }
       ],
       schedule:{
        days_of_week:Object,
        dates_of_month:Object,
        months_of_year:Object
       },
        target: String,
        pricing:[{
          currency:String,
          cost:Number}
        ]
})


const Offers = mongoose.model('Offer',offers)

module.exports = Offers;
