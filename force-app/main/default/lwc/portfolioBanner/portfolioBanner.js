import { LightningElement,wire,api } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets';
import { getRecord,getFieldValue } from 'lightning/uiRecordApi';
import FULLNAME from '@salesforce/schema/Portfolio__c.FullName__c';
import COMPANY_LOCATION from '@salesforce/schema/Portfolio__c.Company_Location__c';
import COMPANY_NAME from '@salesforce/schema/Portfolio__c.Company_Name__c'; 
import DESIGNATION from '@salesforce/schema/Portfolio__c.Designation__c'; 

export default class PortfolioBanner extends LightningElement {

    @api recordId //='a16J4000004XsLcIAK';
    @api linkedinUrl //='https://www.linkedin.com/in/sriguruvenkat-s-05b9421b0/';
    @api trailheadUrl //='https://www.salesforce.com/trailblazer/srigs6';

    userPic=`${PortfolioAssets}/PortfolioAssets/userPic.jpeg`;
    linkedin=`${PortfolioAssets}/PortfolioAssets/Social/linkedin.svg`;
    trailhead=`${PortfolioAssets}/PortfolioAssets/Social/trailhead1.svg`;

    @wire(getRecord,{recordId:'$recordId',fields:[FULLNAME,COMPANY_LOCATION,COMPANY_NAME,DESIGNATION]})
    portfolioData
    /*portfolioHandler({data,error}){
        if(data){
            console.log("record data is "+JSON.stringify(data));
        }
        if(error){
            console.error('error',error);
        }
    }*/
    get fullName(){
        return getFieldValue(this.portfolioData.data,FULLNAME);
    }
    get companyName(){
        return getFieldValue(this.portfolioData.data,COMPANY_NAME);
    }
    get companyLocation(){
        return getFieldValue(this.portfolioData.data,COMPANY_LOCATION);
    }
    get designation(){
        return getFieldValue(this.portfolioData.data,DESIGNATION);
    }
}