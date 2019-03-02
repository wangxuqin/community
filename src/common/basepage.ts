import { ToastController, Toast, NavController, NavParams, Tabs } from "ionic-angular";
import { BaseUI } from "./baseui";
import { TabsPage } from "../pages/tabs/tabs";
import { NewsDetailPage } from "../pages/news-detail/news-detail";
import { BroadcastDetailPage } from "../pages/broadcast-detail/broadcast-detail";
import { TopicsDetailPage } from "../pages/topics-detail/topics-detail";
import { TopicsNewPage } from "../pages/topics-new/topics-new";

export abstract class BasePage extends BaseUI {
    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public toastCtrl: ToastController) {
        super(toastCtrl);
    }

    /**
       * 选定指定的 tab
       * 
       * @param {number} index 
       * @memberof HomePage
       */
    protected selectTab(index: number) {
        var t: Tabs = this.navCtrl.parent;
        t.select(index);
    }

    /**
     * 切换主页Tab
     *
     * @protected
     * @param {*} param
     * @memberof BasePage
     */
    protected toShowHomeTab(param: any) {
        this.selectTab(TabsPage.Tabs.Home);
    }

    /**
     * 切换资讯Tab
     *
     * @protected
     * @param {*} param
     * @memberof BasePage
     */
    protected toShowNewsTab(param: any) {
        this.selectTab(TabsPage.Tabs.News);
    }

    /**
     * 切换话题Tab
     *
     * @protected
     * @param {*} param
     * @memberof BasePage
     */
    protected toShowTopicsTab(param: any) {
        this.selectTab(TabsPage.Tabs.Topics);
    }

    /**
     * 切换我的Tab
     *
     * @protected
     * @param {*} param
     * @memberof BasePage
     */
    protected toShowMyTab(param: any) {
        this.selectTab(TabsPage.Tabs.My);
    }

    /**
     * 显示资讯详情页
     *
     * @protected
     * @param {number} id
     * @memberof BasePage
     */
    protected toShowNewsDetail(id: number) {
        this.navCtrl.push(NewsDetailPage, { id: id });
    }

    /**
     * 显示公告详情页
     *
     * @protected
     * @param {number} id
     * @memberof BasePage
     */
    protected toShowBroadcastDetail(id: number) {
        this.navCtrl.push(BroadcastDetailPage, { id: id });
    }

    /**
     * 显示话题详情页
     *
     * @protected
     * @param {number} id
     * @memberof BasePage
     */
    protected toShowTopicsDetail(id: number) {
        this.navCtrl.push(TopicsDetailPage, { id: id });
    }

    /**
     * 显示话题新建页
     *
     * @protected
     * @memberof BasePage
     */
    protected toShowTopicsNew() {
        this.navCtrl.push(TopicsNewPage);
    }
}