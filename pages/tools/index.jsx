import Head from 'next/head'
import React from 'react'
import { Header } from '../../components'
import styles from './index.module.scss'

export default function Tools () {
  return (
    <>
      <Head>
        <title>MinimalistYing.io - 工具</title>
      </Head>

      <Header active="tools" />
      <div className={styles.tools}>
        <div className={styles.card}>
          <h2>日常开发</h2>
          <div className={styles.content}>
            <a target="_blank" rel="noreferrer" href='https://jsoneditoronline.org/'>JSON Editor</a>
            <a target="_blank" rel="noreferrer" href='https://squoosh.app/'>squoosh.app</a>
            <a target="_blank" rel="noreferrer" href='https://www.iconfont.cn/'>Iconfont</a>
            <a target="_blank" rel="noreferrer" href='https://regexper.com/'>Regexper</a>
            <a target="_blank" rel="noreferrer" href='https://www.jq22.com/code2861'>CSS3 渐变色选择器</a>
            <a target="_blank" rel="noreferrer" href='https://colorable.jxnblk.com'>颜色组合对比度测试</a>
            <a target="_blank" rel="noreferrer" href='http://youmightnotneedjquery.com/'>You Don&apos;t Need Jquery</a>
            <a target="_blank" rel="noreferrer" href='https://colorhunt.co/'>Color Palettes for Designers and Artists</a>
            <a target="_blank" rel="noreferrer" href='https://bit.dev/'>Bit.Dev</a>
            <a target="_blank" rel="noreferrer" href='https://whatwg.org/'>WHATWG - HTML / Fetch / DOM / ... 协议 </a>
            <a target="_blank" rel="noreferrer" href='http://es5.github.io/#x10.5'>Annotated ECMAScript 5.1</a>
            <a target="_blank" rel="noreferrer" href='http://shijuechuanda.com/screen/index.htm'>屏幕尺寸 / 设计规范</a>
            <a target="_blank" rel="noreferrer" href='http://ecma-international.org/publications/standards/Standard.htm'>ECMA Standard</a>
            <a target="_blank" rel="noreferrer" href='https://tc39.es/'>Ecma International&apos;s TC39</a>
            <a target="_blank" rel="noreferrer" href='https://www.w3.org/TR/'>W3C</a>
            <a target="_blank" rel="noreferrer" href='https://www.fileformat.info/'>FileFormat.Info</a>
            <a target="_blank" rel="noreferrer" href='https://astexplorer.net/'>AST Explorer</a>
            <a target="_blank" rel="noreferrer" href='https://www.proposals.es/'>ES Proposals</a>
          </div>
        </div>

        <div className={styles.half}>
          <div className={`${styles.card} ${styles.cardHalf}`}>
            <h2>学习</h2>
            <div className={styles.content}>
              <a target="_blank" rel="noreferrer" href='https://javascript.info/'>The Modern JavaScript Tutorial</a>
              <a target="_blank" rel="noreferrer" href='https://mostly-adequate.gitbooks.io/mostly-adequate-guide/'>Mostly Adequate Guide to FP</a>
              <a target="_blank" rel="noreferrer" href='https://css-tricks.com/'>CSS Tricks</a>
              <a target="_blank" rel="noreferrer" href='https://developers.google.com/web'>Google Developers</a>
              <a target="_blank" rel="noreferrer" href='https://medium.com/dailyjs'>JavaScript Daily</a>
              <a target="_blank" rel="noreferrer" href='https://javascriptweekly.com/'>JavaScript Weekly</a>
              <a target="_blank" rel="noreferrer" href='https://bigfrontend.dev/'>BFE.dev</a>
              <a target="_blank" rel="noreferrer" href='https://web.dev/learn/css/'>Learn CSS</a>
              <a target="_blank" rel="noreferrer" href='https://refactoring.guru/design-patterns'>Learn Design Patterns</a>
            </div>
          </div>
          
          <div className={`${styles.card} ${styles.cardHalf}`}>
            <h2>金融</h2>
            <div className={styles.content}>
              <a target="_blank" rel="noreferrer" href='https://www.ceicdata.com/zh-hans'>CEIC</a>
              <a target="_blank" rel="noreferrer" href='https://cn.tradingview.com/'>TradingView</a>
              <a target="_blank" rel="noreferrer" href='http://www.cninfo.com.cn/new/index'>巨潮资讯</a>
              <a target="_blank" rel="noreferrer" href='https://duibiao.info/'>职级对标</a>
            </div>
          </div>

          <div className={`${styles.card} ${styles.cardHalf}`}>
            <h2>游戏</h2>
            <div className={styles.content}>
              <a target="_blank" rel="noreferrer" href='https://steamcharts.com/'>Steam Charts</a>
              <a target="_blank" rel="noreferrer" href='https://www.metacritic.com/'>Metacritic - Movie / TV / Game Reviews</a>
              <a target="_blank" rel="noreferrer" href='https://www.nexusmods.com/'>Nexus Mods</a>
              <a target="_blank" rel="noreferrer" href='https://indienova.com/'>独立精神</a>
              <a target="_blank" rel="noreferrer" href='https://www.qimai.cn/'>七麦数据</a>
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <h2>博客</h2>
          <div className={styles.content}>
            <a target="_blank" rel="noreferrer" href='https://byvoid.com/'>ByVoid</a>
            <a target="_blank" rel="noreferrer" href='https://overreacted.io/'>Dan Abramov</a>
            <a target="_blank" rel="noreferrer" href='https://jelly.jd.com/'>JELLY</a>
            <a target="_blank" rel="noreferrer" href='https://tympanus.net/codrops/'>Codrops</a>
            <a target="_blank" rel="noreferrer" href='https://hacks.mozilla.org/'>Mozilla Hacks</a>
            <a target="_blank" rel="noreferrer" href='https://isux.tencent.com/'>ISUX</a>
            <a target="_blank" rel="noreferrer" href='https://www.ruanyifeng.com/blog/'>阮一峰</a>
            <a target="_blank" rel="noreferrer" href='https://ishadeed.com/'>ishadeed</a>
            <a target="_blank" rel="noreferrer" href='https://world.hey.com/jason'>jason</a>
          </div>
        </div>

        <div className={styles.card}>
          <h2>其它</h2>
          <div className={styles.content}>
            <a target="_blank" rel="noreferrer" href='https://www.airpano.com/'>AirPano</a>
            <a target="_blank" rel="noreferrer" href='https://screenlane.com/'>Screenlane</a>
            <a target="_blank" rel="noreferrer" href='https://dribbble.com/'>Dribbble</a>
            <a target="_blank" rel="noreferrer" href='https://www.artstation.com/'>ArtStation</a>
            <a target="_blank" rel="noreferrer" href='https://app.diagrams.net/'>diagrams.net</a>
            <a target="_blank" rel="noreferrer" href='https://www.chiphell.com/'>Chip Hell</a>
            <a target="_blank" rel="noreferrer" href='https://www.coursera.org/'>Coursera</a>
          </div>
        </div>
      </div>
    </>
  )
}