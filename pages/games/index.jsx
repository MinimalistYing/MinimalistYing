import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Header } from '../../components';
import styles from './index.module.scss';

export default function Games () {
  const [curr, setCurr] = useState(1);

  useEffect(() => {
    const listener = e => {
      const singleHeight = document.getElementsByTagName('figure')[0]?.clientHeight
      setCurr(Math.ceil(document.documentElement.scrollTop / singleHeight))
    };
    document.addEventListener('scroll', listener);

    return () => document.removeEventListener('scroll', listener);
  }, [])

  return (
    <>
      <Head>
        <title>MinimalistYing.io - 游戏</title>
      </Head>

      <Header active="games" />

      <div className={styles.games}>
        {images.map(image => (
          <figure key={image.url}>
            <ImageCard image={image} />
            <figcaption>{image.title}</figcaption>
          </figure>
        ))}
      </div>

      <div className={styles.poetryA}>人怀前岁忆，</div>
      <div className={styles.poetryB}>花发故年枝。</div>

      <div className={styles.count}>{curr} / {images.length}</div>
    </>
  )
}

function ImageCard ({ image }) {
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)

  function handleMouseMove (e) {
    const width = window.innerWidth * 4 / 5
    const halfWidth = width / 2
    const height = width * ( 9 / 16 )
    const halfHeight = height / 2
    const { offsetX, offsetY } = e.nativeEvent
    setRotateY(15 * (offsetX - halfWidth) / halfWidth)
    setRotateX(-15 * (offsetY - halfHeight) / halfHeight)
  }

  return (
    <img
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        setRotateY(0)
        setRotateX(0)
      }}
      src={image.url}
      alt={image.title}
      loading="lazy"
      style={{
        width: '80vw',
        transform: `perspective(2000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
      }}
    />
  )
}

const images = [{
  title: '风暴奇侠 The Cycle Frontier',
  url: 'https://pic.imgdb.cn/item/62a6993f09475431291f1e7e.jpg',
}, {
  title: '最后的生还者 The Last of Us Remastered',
  url: 'https://pic.imgdb.cn/item/6294b867094754312922425a.jpg',
}, {
  title: '神佑释放 Bless Unleashed',
  url: 'https://pic.imgdb.cn/item/6294b9d30947543129245825.jpg',
}, {
  title: "少林九武猴",
  url: 'https://pic.imgdb.cn/item/6292e2570947543129bc06da.jpg',
}, {
  title: "奥丁 神叛",
  url: 'https://pic.imgdb.cn/item/628f614509475431293c1e99.jpg',
}, {
  title: "超级马里奥 奥德赛",
  url: 'https://pic.imgdb.cn/item/6289be8c0947543129d605f7.jpg',
}, {
  title: "黑森町绮谭 Tales of the Black Forest",
  url: 'https://pic.imgdb.cn/item/6288f4fe094754312959e4f8.jpg',
}, {
  title: "异界锁链 Astral Chain",
  url: 'https://pic.imgdb.cn/item/6280cc6d09475431296e1f88.jpg',
}, {
  title: "重返帝国",
  url: 'https://pic.imgdb.cn/item/627cc6e00947543129e85cdb.jpg',
}, {
  title: "刺客信条 叛变 Assassin's Creed Rogue",
  url: 'https://pic.imgdb.cn/item/62766f130947543129a2cc31.jpg',
}, {
  title: "虚构世界 Figment",
  url: 'https://pic.imgdb.cn/item/626e4971239250f7c54d5e30.jpg',
}, {
  title: "传奇4",
  url: 'https://pic.imgdb.cn/item/626bf406239250f7c5907d9b.jpg',
}, {
  title: "狂战传说 Tales of Berseria",
  url: 'https://pic.imgdb.cn/item/62637a86239250f7c590357a.jpg',
}, {
  title: "看火人 Firewatch",
  url: 'https://pic.imgdb.cn/item/6252a663239250f7c5c895f0.jpg',
}, {
  title: "灵能主宰 Masters of Anima",
  url: 'https://pic.imgdb.cn/item/62514a19239250f7c53b7dcd.jpg',
}, {
  title: "帝国时代2 决定版 Age of Empires II Definitive Edition",
  url: 'https://pic.imgdb.cn/item/624bff5a239250f7c57a1b9b.jpg',
}, {
  title: "毁灭战士 DOOM4",
  url: 'https://pic.imgdb.cn/item/624005c127f86abb2ae70f0d.jpg',
}, {
  title: "牧剑 Tale Of Swords",
  url: 'https://pic.imgdb.cn/item/624005bb27f86abb2ae6f026.jpg',
}, {
  title: "帝国时代1 决定版 Age of Empires Definitive Edition",
  url: 'https://pic.imgdb.cn/item/62359dc35baa1a80ab24e512.jpg',
}, {
  title: "赤痕 夜之仪式 Bloodstained Ritual of the Night",
  url: 'https://pic.imgdb.cn/item/62359dc05baa1a80ab24ded4.jpg',
}, {
  title: "破败之王：英雄联盟外传 Ruined King A League of Legends Story",
  url: 'https://pic.imgdb.cn/item/622e05df5baa1a80ab618777.jpg',
}, {
  title: "子弹风暴 完全版",
  url: 'https://pic.imgdb.cn/item/6220b9c65baa1a80abd6b8a3.jpg',
}, {
  title: "刺客信条 黑旗 Assassin's Creed IV Black Flag",
  url: 'https://pic.imgdb.cn/item/6219f9c72ab3f51d91484f95.jpg',
}, {
  title: '书雁传奇',
  url: 'https://pic.imgdb.cn/item/6214f5ad2ab3f51d91be6a0f.jpg',
}, {
  title: '古剑奇谭网络版',
  url: 'https://pic.imgdb.cn/item/6210cd672ab3f51d918f5a63.jpg',
}, {
  title: '暗影火炬城',
  url: 'https://pic.imgdb.cn/item/6210cd612ab3f51d918f55cc.jpg',
}, {
  title: '秦殇',
  url: 'https://pic.imgdb.cn/item/62077af02ab3f51d9182d645.jpg',
}, {
  title: '真人快打 11',
  url: 'https://pic.imgdb.cn/item/6203d1e42ab3f51d91667cd9.jpg',
}, {
  title: '嗜血印',
  url: 'https://pic.imgdb.cn/item/61f5542a2ab3f51d918a4388.jpg',
}, {
  title: '遗迹：灰烬重生 Remnant From the Ashes',
  url: 'https://pic.imgdb.cn/item/61ebdd4b2ab3f51d9104fc5f.jpg',
}, {
  title: '少林 VS 武当',
  url: 'https://pic.imgdb.cn/item/61da63262ab3f51d91a1a24f.jpg',
}, {
  title: '谓何 Tell Me Why',
  url: 'https://pic.imgdb.cn/item/61da632b2ab3f51d91a1a751.jpg',
}, {
  title: '三国赵云传',
  url: 'https://pic.imgdb.cn/item/61d634822ab3f51d91cddfa9.jpg',
}, {
  title: '名将三国',
  url: 'https://pic.imgdb.cn/item/61d268cf2ab3f51d9119909f.jpg',
}, {
  title: '二之国 交错世界',
  url: 'https://pic.imgdb.cn/item/61ca97892ab3f51d91a250b6.png',
}, {
  title: '不思议的皇冠',
  url: 'https://pic.imgdb.cn/item/61c872532ab3f51d91d61de4.jpg',
}, {
  title: '花之灵 Hoa',
  url: 'https://pic.imgdb.cn/item/61bf2d902ab3f51d91a5ef3e.jpg',
}, {
  title: '空洞骑士 Hollow Knight',
  url: 'https://pic.imgdb.cn/item/61b9f9ae2ab3f51d917b0c88.jpg',
}, {
  title: '世纪 灰烬纪元 Century Age of Ashes',
  url: 'https://pic.imgdb.cn/item/61b0ad682ab3f51d914ddcb3.jpg',
}, {
  title: '剑网三怀旧服',
  url: 'https://pic.imgdb.cn/item/61ac98012ab3f51d91031feb.jpg',
}, {
  title: '仙剑奇侠传九野',
  url: 'https://pic.imgdb.cn/item/61ac97fd2ab3f51d91031d3a.jpg',
}, {
  title: '梦幻新诛仙',
  url: 'https://pic.imgdb.cn/item/618bbd972ab3f51d91065f8b.jpg',
}, {
  title: '影子战场 Shadow Arena',
  url: 'https://pic.imgdb.cn/item/61891b722ab3f51d919d90b6.jpg',
}, {
  title: '天地劫：幽城再临',
  url: 'https://pic.imgdb.cn/item/618142342ab3f51d911f2939.jpg',
}, {
  title: '泰坦之旅十周年纪念版  Titan Quest Anniversary Edition',
  url: 'https://pic.imgdb.cn/item/618142302ab3f51d911f21e4.jpg',
}, {
  title: '超激斗梦境',
  url: 'https://pic.imgdb.cn/item/617123cc2ab3f51d919a8106.jpg',
}, {
  title: '永劫回廊',
  url: 'https://pic.imgdb.cn/item/616278c32ab3f51d9153c431.jpg',
}, {
  title: '小小噩梦 Little Nightmares',
  url: 'https://pic.imgdb.cn/item/615f8b972ab3f51d911daca2.jpg',
}, {
  title: '神明在上',
  url: 'https://pic.imgdb.cn/item/615f8b922ab3f51d911da607.jpg',
}, {
  title: '超凡双生 Beyond Two Souls',
  url: 'https://pic.imgdb.cn/item/615f8b8e2ab3f51d911da048.jpg',
}, {
  title: '逆水寒',
  url: 'https://pic.imgdb.cn/item/614601e32ab3f51d9113edac.jpg',
}, {
  title: '非常英雄 Unruly Heroes',
  url: 'https://pic.imgdb.cn/item/613dedfe44eaada73979811f.jpg',
}, {
  title: '荣耀战魂 For Honor',
  url: 'https://pic.imgdb.cn/item/6126592244eaada739c4fd47.jpg',
}, {
  title: '热血少女物语 River City Girls',
  url: 'https://pic.imgdb.cn/item/6117590d5132923bf8298ccc.jpg',
}, {
  title: '漫威复仇者 Marvel’s Avengers',
  url: 'https://pic.imgdb.cn/item/611759065132923bf829687e.jpg',
}, {
  title: '幽林怪谈 Bladed Fury',
  url: 'https://pic.imgdb.cn/item/611759015132923bf8294fca.jpg',
}, {
  title: '阿尼玛回忆之门-无名之史 Anima Gate of Memories - The Nameless Chronicles',
  url: 'https://pic.imgdb.cn/item/60eaed6e5132923bf84aa6e7.jpg',
}, {
  title: '蜜蜂酿蜜之所 Where the Bees Make Honey',
  url: 'https://pic.imgdb.cn/item/60e323d75132923bf8621980.jpg',
}, {
  title: '刺客信条3：解放 Assassins Creed III',
  url: 'https://pic.imgdb.cn/item/60e1c85e5132923bf8b61524.jpg',
}, {
  title: '部落与弯刀',
  url: 'https://pic.imgdb.cn/item/60e0519d5132923bf82b58a0.jpg',
}, {
  title: '忍者之印 Mark of The Ninja',
  url: 'https://pic.imgdb.cn/item/60e0519a5132923bf82b4829.jpg',
}, {
  title: '斩服少女：异布 Kill la Kill the Game：IF',
  url: 'https://pic.imgdb.cn/item/60cf54fb844ef46bb28139b4.jpg',
}, {
  title: '刺客信条3 Assassin’s Creed III',
  url: 'https://pic.imgdb.cn/item/60cf54f7844ef46bb2810764.jpg',
}, {
  title: '刺客信条 启示录 Assassin’s Creed Revelations',
  url: 'https://ftp.bmp.ovh/imgs/2021/06/e6f751864afb7ae8.webp',
}, {
  title: '笑傲江湖 OL',
  url: 'https://ftp.bmp.ovh/imgs/2021/06/86c3bd23653cd709.webp',
}, {
  title: '乐高旋风忍者大电影',
  url: 'https://ftp.bmp.ovh/imgs/2021/06/5fe6137db56637d9.webp',
}, {
  title: '古墓丽影 TombRaider',
  url: 'https://ftp.bmp.ovh/imgs/2021/06/36879355fdceb0fd.webp',
}, {
  title: '战意',
  url: 'https://ftp.bmp.ovh/imgs/2021/06/a28008901b922baa.webp',
}, {
  title: '拾荒者 Scavengers',
  url: 'https://ftp.bmp.ovh/imgs/2021/06/9fb5c0c101239a98.webp',
}, {
  title: '龙崖',
  url: 'https://ftp.bmp.ovh/imgs/2021/06/0182bd7ffd1aedca.webp',
}, {
  title: '暴雨 Heavy Rain',
  url: 'https://ftp.bmp.ovh/imgs/2021/06/2b53c219573145b3.webp',
}, {
  title: '一起开火车 Unrailed!',
  url: 'https://z3.ax1x.com/2021/04/19/cT0qv8.jpg',
}, {
  title: '无主之地 3',
  url: 'https://z3.ax1x.com/2021/04/11/c00jyj.jpg',
}, {
  title: '超能队长的奇异冒险 The Awesome Adventures of Captain Spirit',
  url: 'https://z3.ax1x.com/2021/03/17/6gCWvV.jpg',
}, {
  title: '劳拉和奥西里斯神庙 Lara Croft and The Temple of Osiris',
  url: 'https://s3.ax1x.com/2021/03/06/6nV4XR.jpg',
}, {
  title: '巫师 2',
  url: 'https://s3.ax1x.com/2021/02/28/6C6BSx.jpg',
}, {
  title: '剑灵',
  url: 'https://s3.ax1x.com/2021/02/19/y4pUhV.jpg',
}, {
  title: '梦塔防',
  url: 'https://s3.ax1x.com/2021/02/01/yeRJDf.jpg',
}, {
  title: '死亡搁浅 Death Stranding',
  url: 'https://s3.ax1x.com/2021/01/23/s7zGO1.jpg',
}, {
  title: '糖豆人 终极淘汰赛',
  url: 'https://s3.ax1x.com/2021/01/23/s7z8yR.jpg',
}, {
  title: 'Apex 英雄',
  url: 'https://s3.ax1x.com/2021/01/11/sGCW0x.jpg',
}, {
  title: '极限竞速 地平线 3',
  url: 'https://s3.ax1x.com/2021/01/10/s1nzPP.jpg',
}, {
  title: 'Braveland',
  url: 'https://s3.ax1x.com/2020/12/31/rjNK0I.jpg',
}, {
  title: 'The Vagrant',
  url: 'https://s3.ax1x.com/2020/12/31/rXfvJe.jpg',
}, {
  title: '铸时匠',
  url: 'https://s3.ax1x.com/2020/12/26/r4p5FO.jpg',
}, {
  title: '彩虹坠入 IrisFall',
  url: 'https://s3.ax1x.com/2020/12/12/rV6GRg.jpg',
}, {
  title: '守望先锋 Overwatch',
  url: 'https://s3.ax1x.com/2020/12/02/Do1DKS.jpg',
}, {
  title: '最终幻想 15',
  url: 'https://s3.ax1x.com/2020/11/24/DNTi0s.jpg',
}, {
  title: '最终幻想 零式 FINAL FANTASY TYPE-0',
  url: 'https://s3.ax1x.com/2020/11/24/DNTF7n.jpg',
}, {
  title: '最终幻想 10',
  url: 'https://s3.ax1x.com/2020/11/24/DNTAkq.jpg',
}, {
  title: '刺客信条 兄弟会 Assassins Creed Brotherhood',
  url: 'https://s3.ax1x.com/2020/11/24/DNT7CV.jpg',
}, {
  title: '阿门罗 Armello',
  url: 'https://s3.ax1x.com/2020/11/24/DNTH3T.jpg',
}, {
  title: 'Spellbreak',
  url: 'https://s3.ax1x.com/2020/11/24/DNTbgU.jpg',
}, {
  title: '碧蓝幻想 Versus',
  url: 'https://s3.ax1x.com/2020/11/24/DNTqvF.jpg',
}, {
  title: '古剑奇谭 3',
  url: 'https://s3.ax1x.com/2020/11/24/DNTXDJ.jpg',
}, {
  title: '命运 2',
  url: 'https://s3.ax1x.com/2020/11/24/DNTjb9.jpg',
}, {
  title: '泰坦陨落 2',
  url: 'https://s3.ax1x.com/2020/11/24/DNTxER.jpg',
}, {
  title: '激战 2',
  url: 'https://s3.ax1x.com/2020/11/24/DNTzU1.jpg',
}, {
  title: '武侠乂',
  url: 'https://s3.ax1x.com/2020/11/24/DN7S4x.jpg',
}, {
  title: '仙侠世界 2',
  url: 'https://s3.ax1x.com/2020/11/24/DN79C6.jpg',
}, {
  title: '永恒轮回 黑色幸存者 Eternal Return Black Survival',
  url: 'https://s3.ax1x.com/2020/11/24/DN7C8K.jpg',
}, {
  title: '在远方 追云者编年史 Yonder The Cloud Catcher Chronicles',
  url: 'https://s3.ax1x.com/2020/11/24/DN7PgO.jpg',
}, {
  title: '战锤 末世鼠疫 2 Warhammer Vermintide 2',
  url: 'https://s3.ax1x.com/2020/11/24/DN7ivD.jpg',
}, {
  title: '战国无双 真田丸',
  url: 'https://s3.ax1x.com/2020/11/24/DN7kKe.jpg',
}, {
  title: '质量效应 2 Mass.Effect.2',
  url: 'https://s3.ax1x.com/2020/11/23/DYcJHg.jpg',
}, {
  title: '中土世界：暗影魔多',
  url: 'https://s3.ax1x.com/2020/11/23/DYcGDS.jpg'
}, {
  title: '战神 God of War',
  url: 'https://s3.ax1x.com/2020/11/23/DYc8u8.jpg'
}, {
  title: '酉闪町 DuskDiver',
  url: 'https://s3.ax1x.com/2020/11/23/DYclgP.jpg'
}, {
  title: '永恒之塔',
  url: 'https://s3.ax1x.com/2020/11/23/DYc1jf.jpg'
}, {
  title: '无主之地 2',
  url: 'https://s3.ax1x.com/2020/11/23/DYcQ3t.jpg'
}, {
  title: '雨纪',
  url: 'https://s3.ax1x.com/2020/11/23/DYcM9I.jpg'
}, {
  title: '羞辱 Dishonored',
  url: 'https://s3.ax1x.com/2020/11/23/DYcnNd.jpg'
}, {
  title: '旺达与巨象 Shadow of the Colossus',
  url: 'https://s3.ax1x.com/2020/11/23/DYcmAH.jpg'
}, {
  title: '我在 7 年后等着你',
  url: 'https://s3.ax1x.com/2020/11/23/DYcZHe.jpg'
}, {
  title: '铁拳 7',
  url: 'https://s3.ax1x.com/2020/11/23/DYcVBD.jpg'
}, {
  title: '泰亚史诗',
  url: 'https://s3.ax1x.com/2020/11/23/DYcEnO.jpg'
}, {
  title: '神舞幻想',
  url: 'https://s3.ax1x.com/2020/11/23/DYckjK.jpg'
}, {
  title: '天命奇御',
  url: 'https://s3.ax1x.com/2020/11/23/DYcFc6.jpg'
}, {
  title: '全面战争战锤 2 Total War WARHAMMER II',
  url: 'https://s3.ax1x.com/2020/11/23/DYci1x.jpg'
}, {
  title: '瑞奇与叮当 Ratchet & Clank',
  url: 'https://s3.ax1x.com/2020/11/23/DYcpN9.jpg'
}, {
  title: '龙之皇冠 Dragons Crown Pro',
  url: 'https://s3.ax1x.com/2020/11/23/DY6x74.jpg'
}, {
  title: '去月球',
  url: 'https://s3.ax1x.com/2020/11/23/DY6vBF.jpg'
}, {
  title: '龙之谷',
  url: 'https://s3.ax1x.com/2020/11/23/DY6jnU.jpg'
}, {
  title: '猎天使魔女',
  url: 'https://s3.ax1x.com/2020/11/23/DY6OXT.jpg'
}, {
  title: '救赎之路 Sinner',
  url: 'https://s3.ax1x.com/2020/11/23/DY6LcV.jpg'
}, {
  title: '加速世界VS刀剑神域：千年的黄昏',
  url: 'https://s3.ax1x.com/2020/11/23/DY6q10.jpg'
}, {
  title: '地平线：零之曙光 Horizon Zero Dawn',
  url: 'https://s3.ax1x.com/2020/11/23/DY6bpq.jpg'
}, {
  title: '花园之间 The Gardens Between',
  url: 'https://s3.ax1x.com/2020/11/23/DY67hn.jpg'
}, {
  title: '荒野大嫖客 2',
  url: 'https://s3.ax1x.com/2020/11/23/DY6Tts.jpg'
}, {
  title: '虎豹骑',
  url: 'https://s3.ax1x.com/2020/11/23/DY6okj.jpg'
}, {
  title: '格斗领域 EX FIGHTING EX LAYER',
  url: 'https://s3.ax1x.com/2020/11/23/DY657Q.jpg'
}, {
  title: 'Goat Of Duty',
  url: 'https://s3.ax1x.com/2020/11/23/DY640g.jpg'
}, {
  title: 'KurtzPel',
  url: 'https://s3.ax1x.com/2020/11/23/DY6hnS.jpg'
}, {
  title: '刺客信条 2',
  url: 'https://s3.ax1x.com/2020/11/23/DY6WX8.jpg'
}, {
  title: '恶果之地',
  url: 'https://s3.ax1x.com/2020/11/23/DY6R6f.jpg'
}, {
  title: '天谕',
  url: 'https://s3.ax1x.com/2020/11/23/DY6skd.png'
}]
