import { LightningElement } from 'lwc';
import PortfolioAssets from '@salesforce/resourceUrl/PortfolioAssets';

export default class PortfolioPersonalProjects extends LightningElement {
    BMICalculator=`${PortfolioAssets}/PortfolioAssets/Projects/BMICalculator.png`;
    AlarmClock=`${PortfolioAssets}/PortfolioAssets/Projects/AlarmClock.png`;
    CurrencyCalculator=`${PortfolioAssets}/PortfolioAssets/Projects/CurrencyCalculator.png`;
    WeatherApp=`${PortfolioAssets}/PortfolioAssets/Projects/WeatherApp.png`;
    SurveyApp=`${PortfolioAssets}/PortfolioAssets/Projects/Survey.png`;
    NoteApp=`${PortfolioAssets}/PortfolioAssets/Projects/NoteTakingApp.png`;

    projects=[
        {
            "name":"BMI Calculator App",
            "image":this.BMICalculator,
            "link":"https://sgv-7d-portfolio-dev-ed.develop.my.site.com/bmi-calculator"
        },
        {
            "name":"Alarm Clock App",
            "image":this.AlarmClock,
            "link":"https://sgv-7d-portfolio-dev-ed.develop.my.site.com/alarm-clock"
        },
        {
            "name":"Weather App",
            "image":this.WeatherApp,
            "link":"https://sgv-7d-portfolio-dev-ed.develop.my.site.com/weather-app"
        },
        {
            "name":"Currency Converter App",
            "image":this.CurrencyCalculator,
            "link":"https://sgv-7d-portfolio-dev-ed.develop.my.site.com/currency-converter"
        },
        {
            "name":"Survey App",
            "image":this.SurveyApp,
            "link":"https://sgv-7d-portfolio-dev-ed.develop.my.site.com/survey/survey/runtimeApp.app?invitationId=0KiJ4000001BORH&surveyName=employee_survey&UUID=3a154c5f-7e89-4c45-9603-bc3217e47057"
        },
        {
            "name":"Notes App",
            "image":this.NoteApp,
            "link":"https://sgv-7d-portfolio-dev-ed.develop.my.site.com/keep-notes-app"
        },
    ]
}