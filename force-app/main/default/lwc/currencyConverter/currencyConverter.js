import { LightningElement } from 'lwc';
import { countryCodeList } from 'c/countryCodelist';
import currencyConverterAssets from '@salesforce/resourceUrl/currencyConverterAssets';

export default class CurrencyCoverter extends LightningElement {
    currencyImage=currencyConverterAssets + '/currencyConverterAssets/currency.svg';
    countryList=countryCodeList;
    countryFrom="USD";
    countryTo="AUD";
    amount='';
    result;

    handleChange(event){
        const{name,value}=event.target;
        console.log("name",name);
        console.log("value",value);
        this[name]=value;
        this.result='';
        this.error='';
    }

    submitHandler(event){
        event.preventDefault();
        this.convert();
    }

    async convert(){
        const API_KEY='1bcbc1c246fecf51e288eb9e';
        console.log(API_KEY);
        const API_URL=`https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${this.countryFrom}/${this.countryTo}`;
        try{
            const data=await fetch(API_URL);
            const jsonData= await data.json();
            console.log("jsonData",jsonData);
            this.result = (Number(this.amount) * jsonData.conversion_rate).toFixed(2)
            console.log("Result",this.result);
        }
        catch(error){
            console.log(error);
            this.error="Error has occured.Try again..";
        }
    }
}