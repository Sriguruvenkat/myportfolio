import { api, LightningElement,wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import TECH_FIELD from '@salesforce/schema/Portfolio__c.Technical_Skills__c';
import SOFT_SKILLS from '@salesforce/schema/Portfolio__c.Soft_Skills__c';
import SOFTWARE_TOOLS from '@salesforce/schema/Portfolio__c.Software_Tools__c';
import METHODOLGIES_FIELD from '@salesforce/schema/Portfolio__c.Software_Development_Methologies__c';
export default class PortfolioSkills extends LightningElement {
    techSkills=[];
    softSkils=[];
    methodologies=[];
    toolSkills=[];
    @api recordId;
    @wire(getRecord,{
        recordId:'$recordId',
        fields:[TECH_FIELD,SOFT_SKILLS,SOFTWARE_TOOLS,METHODOLGIES_FIELD]
    })skillHandler({data,error}){
        if(data){
            console.log("Skill Data",JSON.stringify(data));
            this.formatSkills(data);
        }
        if(error){
            console.error("Skills Error",error);
        }
    }

    formatSkills(data){
        const{Technical_Skills__c,Soft_Skills__c,Software_Tools__c,Software_Development_Methologies__c}=data.fields;
        this.techSkills=Technical_Skills__c?Technical_Skills__c.value.split(','):[];
        this.softSkils=Soft_Skills__c?Soft_Skills__c.value.split(','):[];
        this.methodologies=Software_Development_Methologies__c?Software_Development_Methologies__c.value.split(','):[];
        this.toolSkills=Software_Tools__c?Software_Tools__c.value.split(','):[];

    }
}