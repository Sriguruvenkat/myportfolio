import { LightningElement ,wire,api} from 'lwc';
import { getRelatedListRecords } from 'lightning/uiRelatedListApi';
export default class PortfolioWorkExperience extends LightningElement {
    
    @api recordId;
    workExperienceList=[];
    @wire(getRelatedListRecords,{
        parentRecordId:'$recordId',
        relatedListId:'WorkExperience__r',
        fields:['Work_Experience__c.Job_Start_Date__c',
            'Work_Experience__c.Job_End_Date__c','Work_Experience__c.Role__c',
            'Work_Experience__c.Company_Name__c','Work_Experience__c.Work_Location__c',
            'Work_Experience__c.Description__c',
            'Work_Experience__c.Is_Current__c']
    })WorkExperienceHandler({data,error}){
        if(data){
            console.log("WorkExperience Data",JSON.stringify(data));
            this.formatExperience(data);
        }
        if(error){
            console.error(error);
        }
    }

    formatExperience(data){
        this.workExperienceList=[...data.records].reverse().map(item=>{
            let id=item.id;
            const {Job_Start_Date__c,Job_End_Date__c,Role__c,Company_Name__c,Work_Location__c
                ,Description__c,Is_Current__c}=item.fields;
            let JobStartDate=this.getValue(Job_Start_Date__c);
            let JobEndDate=this.getValue(Job_End_Date__c);
            let IsCurrent=this.getValue(Is_Current__c);
            let Role=this.getValue(Role__c);
            let CompanyName=this.getValue(Company_Name__c);
            let WorkLocation=this.getValue(Work_Location__c);
            let Description=this.getValue(Description__c);

            return {id,JobStartDate,JobEndDate,CompanyName,WorkLocation,Description,IsCurrent,Role}
        })
        
        console.log("WorkExperience Data",JSON.stringify(this.workExperienceList));
    }

    getValue(data){
        return data && (data.displayValue || data.value);
    }
}