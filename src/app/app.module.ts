import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AccordionModule, TooltipModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InAppNotificationComponent } from './in-app-notification/in-app-notification.component';
import { RewardsComponent } from './rewards/rewards.component';
import { ModalBuyRepTokenComponent } from './modal-buy-rep-token/modal-buy-rep-token.component';
import { ModalCreateFundComponent } from './modal-create-fund/modal-create-fund.component';
import { FundComponent } from './fund/fund.component';
import { FundActiveTradeComponent } from './fund-active-trade/fund-active-trade.component';
import { FundTradeHistoryComponent } from './fund-trade-history/fund-trade-history.component';
import { FundRankingComponent } from './fund-ranking/fund-ranking.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

import { InvestmentsComponent } from './investments/investments.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { CommissionsComponent } from './commissions/commissions.component';
import { InvestorComponent } from './investor/investor.component';
import { ManageronboardingComponent } from './manager-onboarding/manageronboarding.component';
import { InvestoronboardingComponent } from './investor-onboarding/investoronboarding.component';
import { MarketComponent } from './market/market.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/portfolio',
    pathMatch: 'full'
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    pathMatch: 'full'
  },
  {
    path: 'rewards',
    component: RewardsComponent,
    pathMatch: 'full'
  },
  {
    path: 'fund',
    component: FundComponent,
    pathMatch: 'full'
  },
  {
    path: 'investments',
    component: InvestmentsComponent,
    pathMatch: 'full'
  },
  {
    path: 'upgrades',
    component: UpgradeComponent,
    pathMatch: 'full'
  },
  {
    path: 'commissions',
    component: CommissionsComponent,
    pathMatch: 'full'
  },
  {
    path: 'invest',
    component: InvestorComponent,
    pathMatch: 'full'
  },
  {
    path: 'market',
    component: MarketComponent,
    pathMatch: 'full'
  },
  {
    path: 'investing-dashboard',
    redirectTo: '/invest',
    pathMatch: 'full'
  },
  {
    path: 'start',
    component: InvestoronboardingComponent,
    pathMatch: 'full'
  },
  {
    path: 'start-managing',
    component: ManageronboardingComponent,
    pathMatch: 'full'
  }

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InAppNotificationComponent,
    FooterComponent,
    RewardsComponent,
    ModalBuyRepTokenComponent,
    ModalCreateFundComponent,
    FundComponent,
    FundActiveTradeComponent,
    FundTradeHistoryComponent,
    FundRankingComponent,
    SideNavComponent,
    PortfolioComponent,
    InvestmentsComponent,
    UpgradeComponent,
    CommissionsComponent,
    InvestorComponent,
    InvestoronboardingComponent,
    ManageronboardingComponent,
    MarketComponent,
  ],
  imports: [
    AccordionModule.forRoot(),
    BrowserModule,
    CollapseModule.forRoot(),
    TooltipModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    GraphQLModule,
    HttpClientModule
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent]
})
export class AppModule { }
