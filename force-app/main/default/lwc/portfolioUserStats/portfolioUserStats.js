import { LightningElement,api } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets';

export default class PortfolioUserStats extends LightningElement {

    trailheadRanking;
    @api badges='127+';
    @api points='119,925';
    @api trails='17';
    @api rank

    renderedCallback(){
        if(this.rank){
            let url=`${PortfolioAssets}/PortfolioAssets/Ranks/${this.rank}.png`;
            this.trailheadRanking=url;
        }
    }
}