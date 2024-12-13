import { LightningElement ,api} from 'lwc';

export default class PortfolioUserDetails extends LightningElement {
    @api recordId;
    @api objectApiName;
    @api resumeUrl;
    downloadResume(){
        window.open(this.resumeUrl,"_blank");
    }
    //"https://github.com/Sriguruvenkat/resume/blob/1226f4ab9a4d1bcc73f6793b5b5ddbaf3493eebf/SRIGURUVENKAT_SS2.pdf"
}