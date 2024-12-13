import { LightningElement,api,wire } from 'lwc';
import { getRelatedListRecords } from 'lightning/uiRelatedListApi';

const COLUMNS=[
    {label:'Education',fieldName:'Education'},
    {label:'Institution Name',fieldName:'Institution'},
    {label:'Passing Year',fieldName:'PassingYear'}];
export default class PortfolioEducation extends LightningElement {
    @api recordId;
    table=[];
    columns=COLUMNS;
    @wire(getRelatedListRecords,{
            parentRecordId:'$recordId',
            relatedListId:'Educations__r',
            fields:['Education__c.Institution_Name__c','Education__c.Title__c','Education__c.Passing_Year__c'],
            sortBy:['Education__c.Passing_Year__c']

})EducationHandler({data,error}){
    if(data){
        console.log("Education data",JSON.stringify(data));
        this.formatEducation(data);
    }
    if(error){
        console.error("Education error",error);
    }
    }
    formatEducation(data){
        this.table=[...data.records].reverse().map(item=>{
            let id=item.id;
            const {Institution_Name__c,Title__c,Role__c,Passing_Year__c}=item.fields;
            let Education=Title__c.value;
            let Institution=Institution_Name__c.value;
            let PassingYear=Passing_Year__c.value;
            return {id,Education,Institution,PassingYear}
        })
        console.log('Education table',this.table);
    }
}