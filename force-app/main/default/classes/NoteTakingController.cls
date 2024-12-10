public without sharing class NoteTakingController {
    @AuraEnabled
    public static Boolean createNoteRecord(String title,String description){
        try{
            if(!String.isBlank(title)){
                My_Note__c note= new My_Note__c(Name=title,Note_Description__c=description);
                insert note;
                return true;
            }
            return false;
        }catch(Exception e){
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled(cacheable=true)
    public static List<My_Note__c> getNotes(){
        return [select Id,Name,Note_Description__c,LastModifiedDate from My_Note__c order by LastModifiedDate];
    }

    @AuraEnabled
    public static Boolean updateNoteRecord(string noteId,string title,string description){
        try {
            if(!String.isBlank(noteId)){
                My_Note__c note=[SELECT Id,Name,Note_Description__c,LastModifiedDate from My_Note__c where Id=:noteId];
                note.Name=title;
                note.Note_Description__c=description;
                update note;
                return true;
            }
            return false;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static Boolean deleteNoteRecord(string noteId){
        try {
            if(!String.isBlank(noteId)){
                My_Note__c noteRec=new My_Note__c(Id=noteId);
                delete noteRec;
                return true;
            }
            return false;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}