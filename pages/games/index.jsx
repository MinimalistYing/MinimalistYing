import Head from "next/head";
import { useEffect, useState } from "react";
import { Header } from "../../components";
import styles from "./index.module.scss";

export default function Games() {
  const [curr, setCurr] = useState(1);

  useEffect(() => {
    const listener = (e) => {
      const singleHeight =
        document.getElementsByTagName("figure")[0]?.clientHeight;
      setCurr(Math.ceil(document.documentElement.scrollTop / singleHeight));
    };
    document.addEventListener("scroll", listener);

    return () => document.removeEventListener("scroll", listener);
  }, []);

  return (
    <>
      <Head>
        <title>MinimalistYing.io - 游戏</title>
      </Head>

      <Header active="games" />

      <div className={styles.games}>
        {images.map((image) => (
          <figure key={image.url}>
            <ImageCard image={image} />
            <figcaption>{image.title}</figcaption>
          </figure>
        ))}
      </div>

      <div className={styles.poetryA}>
        人怀<span style={{ color: "var(--dark-pink)" }}>前岁</span>忆，
      </div>
      <div className={styles.poetryB}>
        花发<span style={{ color: "var(--dark-pink)" }}>故年</span>枝。
      </div>

      <div className={styles.count}>
        {curr} / {images.length}
      </div>
    </>
  );
}

function ImageCard({ image }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  function handleMouseMove(e) {
    const width = (window.innerWidth * 4) / 5;
    const halfWidth = width / 2;
    const height = width * (9 / 16);
    const halfHeight = height / 2;
    const { offsetX, offsetY } = e.nativeEvent;
    setRotateY((15 * (offsetX - halfWidth)) / halfWidth);
    setRotateX((-15 * (offsetY - halfHeight)) / halfHeight);
  }

  return (
    <img
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        setRotateY(0);
        setRotateX(0);
      }}
      src={image.url}
      alt={image.title}
      loading="lazy"
      style={{
        width: "80vw",
        transform: `perspective(2000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      }}
    />
  );
}

const images = [
  {
    title: "圣歌 Anthem",
    url: "https://pic.imgdb.cn/item/65a3ca18871b83018afe8d51.jpg",
  },
  {
    title: "DNF Duel",
    url: "https://pic.imgdb.cn/item/6598f359871b83018a1bae08.jpg",
  },
  {
    title: "仙剑奇侠传五前传",
    url: "https://pic.imgdb.cn/item/659027aac458853aef685a7c.jpg",
  },
  {
    title: "魔兽世界",
    url: "https://pic.imgdb.cn/item/6586ee4bc458853aef409f60.jpg",
  },
  {
    title: "底特律 化身为人 Detroit Become Human",
    url: "https://pic.imgdb.cn/item/657dc246c458853aef4396ca.jpg",
  },
  {
    title: "胜利女神 NIKKE",
    url: "https://pic.imgdb.cn/item/65758d6dc458853aeff0b3bd.jpg",
  },
  {
    title: "光明记忆 第一章",
    url: "https://pic.imgdb.cn/item/6573239dc458853aefaa943b.jpg",
  },
  {
    title: "降世神通 科拉传奇 Avatar The Legend of Korra",
    url: "https://pic.imgdb.cn/item/65426a64c458853aef3275f7.jpg",
  },
  {
    title: "异度神剑 2 黄金之国伊拉",
    url: "https://pic.imgdb.cn/item/653e5084c458853aef1d68cd.jpg",
  },
  {
    title: "逆水寒手游",
    url: "https://pic.imgdb.cn/item/652b7ac4c458853aef0b0327.jpg",
  },
  {
    title: "火焰纹章无双 风花雪月",
    url: "https://pic.imgdb.cn/item/65193c4cc458853aefa80e36.png",
  },
  {
    title: "米德加尔的部落",
    url: "https://pic.imgdb.cn/item/64fc362f661c6c8e54f41074.jpg",
  },
  {
    title: "玄女诛魔录",
    url: "https://pic.imgdb.cn/item/64f9d3c4661c6c8e5465ac9c.jpg",
  },
  {
    title: "塞尔达传说 王国之泪",
    url: "https://pic.imgdb.cn/item/64f47d7f661c6c8e5414ffc7.jpg",
  },
  {
    title: "元能失控",
    url: "https://pic.imgdb.cn/item/64eaf867661c6c8e547e5967.jpg",
  },
  {
    title: "弈仙牌",
    url: "https://pic.imgdb.cn/item/64d766fa1ddac507cceaf9ec.jpg",
  },
  {
    title: "阿尔戈英雄的崛起 Rise of the Argonauts",
    url: "https://pic.imgdb.cn/item/64c632d01ddac507cc99098b.jpg",
  },
  {
    title: "魔兽世界怀旧服",
    url: "https://pic.imgdb.cn/item/64b5599f1ddac507cccef2a1.jpg",
  },
  {
    title: "黑道圣徒 杀出地狱 Saints Row Gat Out of Hell",
    url: "https://pic.imgdb.cn/item/648549e41ddac507cc25a90e.jpg",
  },
  {
    title: "尘埃 幸福的轨迹 Dust An Elysian Tail",
    url: "https://pic.imgdb.cn/item/647c68051ddac507ccf71e52.jpg",
  },
  {
    title: "Mirror 2 Project X",
    url: "https://pic.imgdb.cn/item/6468e203e03e90d8745bf94d.jpg",
  },
  {
    title: "魔兽争霸三 Reforged",
    url: "https://pic2.imgdb.cn/item/64573f920d2dde57770e45cb.jpg",
  },
  {
    title: "仙剑奇侠传四",
    url: "https://pic2.imgdb.cn/item/644d29500d2dde5777db35f3.jpg",
  },
  {
    title: "劳拉与光之守护者",
    url: "https://pic.imgdb.cn/item/6430cb640d2dde5777c19f70.jpg",
  },
  {
    title: "多伦塔 Toren",
    url: "https://pic.imgdb.cn/item/6425a282a682492fcc9eac8a.jpg",
  },
  {
    title: "星之卡比 新星同盟",
    url: "https://pic.imgdb.cn/item/641daa06a682492fcc1ddbfe.png",
  },
  {
    title: "毒奶粉国服",
    url: "https://pic.imgdb.cn/item/63f03f5ef144a0100716b932.jpg",
  },
  {
    title: "恶魔狩猎 Devil's Hunt",
    url: "https://pic.imgdb.cn/item/63eebbdef144a010079c94ad.jpg",
  },
  {
    title: "我的朋友佩德罗 My Friend Pedro",
    url: "https://pic.imgdb.cn/item/63c002efbe43e0d30e448cee.jpg",
  },
  {
    title: "DmC 鬼泣",
    url: "https://pic.imgdb.cn/item/63b6dd4dbe43e0d30e8878a3.jpg",
  },
  {
    title: "天涯明月刀",
    url: "https://pic.imgdb.cn/item/63ae8c0308b6830163211b6e.jpg",
  },
  {
    title: "宝可梦 紫",
    url: "https://pic.imgdb.cn/item/63ae6f5c08b6830163f15039.jpg",
  },
  {
    title: "轩辕剑外传 穹之扉",
    url: "https://pic.imgdb.cn/item/639b1d6ab1fccdcd36cbecc0.jpg",
  },
  {
    title: "星辰变",
    url: "https://pic.imgdb.cn/item/639ae453b1fccdcd3666555c.jpg",
  },
  {
    title: "恶月十三 Undecember",
    url: "https://pic.imgdb.cn/item/6382fca416f2c2beb16901b8.jpg",
  },
  {
    title: "圣女战旗",
    url: "https://pic.imgdb.cn/item/63763b3316f2c2beb1b0ef5e.jpg",
  },
  {
    title: "神秘海域3 德雷克的欺骗",
    url: "https://pic1.imgdb.cn/item/635d2eea16f2c2beb1be62dd.jpg",
  },
  {
    title: "教团 1886 The Order 1886",
    url: "https://pic1.imgdb.cn/item/6353edab16f2c2beb1f934a8.jpg",
  },
  {
    title: "轩辕剑六 凤凌长空千载云",
    url: "https://pic1.imgdb.cn/item/634ec0e616f2c2beb1627085.jpg",
  },
  {
    title: "神秘海域2 纵横四海",
    url: "https://pic1.imgdb.cn/item/633fe6bd16f2c2beb1aefe8b.jpg",
  },
  {
    title: "鬼谷八荒",
    url: "https://pic.imgdb.cn/item/632fd0fa16f2c2beb1079096.jpg",
  },
  {
    title: "火焰纹章 风花雪月",
    url: "https://pic.imgdb.cn/item/6325cfa016f2c2beb16179df.jpg",
  },
  {
    title: "神秘海域 德雷克船长的宝藏",
    url: "https://pic.imgdb.cn/item/63036c4f16f2c2beb10c4468.jpg",
  },
  {
    title: "灵魂行者 SoulWorker",
    url: "https://pic.imgdb.cn/item/63036c4b16f2c2beb10c4297.jpg",
  },
  {
    title: "轩辕剑 汉之云",
    url: "https://pic.imgdb.cn/item/62fe3fe316f2c2beb175dfd1.jpg",
  },
  {
    title: "帝国时代3 决定版 Age of Empires III Definitive Edition",
    url: "https://pic.imgdb.cn/item/62ea4cb416f2c2beb145ba19.jpg",
  },
  {
    title: "无间冥寺 Curse of the Dead Gods",
    url: "https://pic.imgdb.cn/item/62e8e96016f2c2beb1f2b23b.jpg",
  },
  {
    title: "仙剑奇侠传二",
    url: "https://pic.imgdb.cn/item/62d9036ff54cd3f937f1586f.jpg",
  },
  {
    title: "三星亚索追梦成功",
    url: "https://pic.imgdb.cn/item/62cedb28f54cd3f9377bb0ca.jpg",
  },
  {
    title: "路易吉洋馆 3",
    url: "https://pic.imgdb.cn/item/62c95f02f54cd3f937da205a.jpg",
  },
  {
    title: "异度神剑 终极版",
    url: "https://pic.imgdb.cn/item/62c8c5e0f54cd3f9371687d1.jpg",
  },
  {
    title: "致命躯壳 Mortal Shell",
    url: "https://pic.imgdb.cn/item/62b3cd1d094754312951613a.jpg",
  },
  {
    title: "质量效应3 Mass.Effect.3",
    url: "https://pic.imgdb.cn/item/62b0794209475431294b6fcd.jpg",
  },
  {
    title: "风暴奇侠 The Cycle Frontier",
    url: "https://pic.imgdb.cn/item/62a6993f09475431291f1e7e.jpg",
  },
  {
    title: "最后的生还者 The Last of Us Remastered",
    url: "https://pic.imgdb.cn/item/6294b867094754312922425a.jpg",
  },
  {
    title: "神佑释放 Bless Unleashed",
    url: "https://pic.imgdb.cn/item/6294b9d30947543129245825.jpg",
  },
  {
    title: "少林九武猴",
    url: "https://pic.imgdb.cn/item/6292e2570947543129bc06da.jpg",
  },
  {
    title: "奥丁 神叛",
    url: "https://pic.imgdb.cn/item/628f614509475431293c1e99.jpg",
  },
  {
    title: "超级马里奥 奥德赛",
    url: "https://pic.imgdb.cn/item/6289be8c0947543129d605f7.jpg",
  },
  {
    title: "黑森町绮谭 Tales of the Black Forest",
    url: "https://pic.imgdb.cn/item/6288f4fe094754312959e4f8.jpg",
  },
  {
    title: "异界锁链 Astral Chain",
    url: "https://pic.imgdb.cn/item/6280cc6d09475431296e1f88.jpg",
  },
  {
    title: "重返帝国",
    url: "https://pic.imgdb.cn/item/627cc6e00947543129e85cdb.jpg",
  },
  {
    title: "刺客信条 叛变 Assassin's Creed Rogue",
    url: "https://pic.imgdb.cn/item/62766f130947543129a2cc31.jpg",
  },
  {
    title: "虚构世界 Figment",
    url: "https://pic.imgdb.cn/item/626e4971239250f7c54d5e30.jpg",
  },
  {
    title: "传奇4",
    url: "https://pic.imgdb.cn/item/626bf406239250f7c5907d9b.jpg",
  },
  {
    title: "狂战传说 Tales of Berseria",
    url: "https://pic.imgdb.cn/item/62637a86239250f7c590357a.jpg",
  },
  {
    title: "看火人 Firewatch",
    url: "https://pic.imgdb.cn/item/6252a663239250f7c5c895f0.jpg",
  },
  {
    title: "灵能主宰 Masters of Anima",
    url: "https://pic.imgdb.cn/item/62514a19239250f7c53b7dcd.jpg",
  },
  {
    title: "帝国时代2 决定版 Age of Empires II Definitive Edition",
    url: "https://pic.imgdb.cn/item/624bff5a239250f7c57a1b9b.jpg",
  },
  {
    title: "毁灭战士 DOOM4",
    url: "https://pic.imgdb.cn/item/624005c127f86abb2ae70f0d.jpg",
  },
  {
    title: "牧剑 Tale Of Swords",
    url: "https://pic.imgdb.cn/item/624005bb27f86abb2ae6f026.jpg",
  },
  {
    title: "帝国时代1 决定版 Age of Empires Definitive Edition",
    url: "https://pic.imgdb.cn/item/62359dc35baa1a80ab24e512.jpg",
  },
  {
    title: "赤痕 夜之仪式 Bloodstained Ritual of the Night",
    url: "https://pic.imgdb.cn/item/62359dc05baa1a80ab24ded4.jpg",
  },
  {
    title: "破败之王：英雄联盟外传 Ruined King A League of Legends Story",
    url: "https://pic.imgdb.cn/item/622e05df5baa1a80ab618777.jpg",
  },
  {
    title: "子弹风暴 完全版",
    url: "https://pic.imgdb.cn/item/6220b9c65baa1a80abd6b8a3.jpg",
  },
  {
    title: "刺客信条 黑旗 Assassin's Creed IV Black Flag",
    url: "https://pic.imgdb.cn/item/6219f9c72ab3f51d91484f95.jpg",
  },
  {
    title: "书雁传奇",
    url: "https://pic.imgdb.cn/item/6214f5ad2ab3f51d91be6a0f.jpg",
  },
  {
    title: "古剑奇谭网络版",
    url: "https://pic.imgdb.cn/item/6210cd672ab3f51d918f5a63.jpg",
  },
  {
    title: "暗影火炬城",
    url: "https://pic.imgdb.cn/item/6210cd612ab3f51d918f55cc.jpg",
  },
  {
    title: "秦殇",
    url: "https://pic.imgdb.cn/item/62077af02ab3f51d9182d645.jpg",
  },
  {
    title: "真人快打 11",
    url: "https://pic.imgdb.cn/item/6203d1e42ab3f51d91667cd9.jpg",
  },
  {
    title: "嗜血印",
    url: "https://pic.imgdb.cn/item/61f5542a2ab3f51d918a4388.jpg",
  },
  {
    title: "遗迹：灰烬重生 Remnant From the Ashes",
    url: "https://pic.imgdb.cn/item/61ebdd4b2ab3f51d9104fc5f.jpg",
  },
  {
    title: "少林 VS 武当",
    url: "https://pic.imgdb.cn/item/61da63262ab3f51d91a1a24f.jpg",
  },
  {
    title: "谓何 Tell Me Why",
    url: "https://pic.imgdb.cn/item/61da632b2ab3f51d91a1a751.jpg",
  },
  {
    title: "三国赵云传",
    url: "https://pic.imgdb.cn/item/61d634822ab3f51d91cddfa9.jpg",
  },
  {
    title: "名将三国",
    url: "https://pic.imgdb.cn/item/61d268cf2ab3f51d9119909f.jpg",
  },
  {
    title: "二之国 交错世界",
    url: "https://pic.imgdb.cn/item/61ca97892ab3f51d91a250b6.png",
  },
  {
    title: "不思议的皇冠",
    url: "https://pic.imgdb.cn/item/61c872532ab3f51d91d61de4.jpg",
  },
  {
    title: "花之灵 Hoa",
    url: "https://pic.imgdb.cn/item/61bf2d902ab3f51d91a5ef3e.jpg",
  },
  {
    title: "空洞骑士 Hollow Knight",
    url: "https://pic.imgdb.cn/item/61b9f9ae2ab3f51d917b0c88.jpg",
  },
  {
    title: "世纪 灰烬纪元 Century Age of Ashes",
    url: "https://pic.imgdb.cn/item/61b0ad682ab3f51d914ddcb3.jpg",
  },
  {
    title: "剑网三怀旧服",
    url: "https://pic.imgdb.cn/item/61ac98012ab3f51d91031feb.jpg",
  },
  {
    title: "仙剑奇侠传九野",
    url: "https://pic.imgdb.cn/item/61ac97fd2ab3f51d91031d3a.jpg",
  },
  {
    title: "梦幻新诛仙",
    url: "https://pic.imgdb.cn/item/618bbd972ab3f51d91065f8b.jpg",
  },
  {
    title: "影子战场 Shadow Arena",
    url: "https://pic.imgdb.cn/item/61891b722ab3f51d919d90b6.jpg",
  },
  {
    title: "天地劫：幽城再临",
    url: "https://pic.imgdb.cn/item/618142342ab3f51d911f2939.jpg",
  },
  {
    title: "泰坦之旅十周年纪念版  Titan Quest Anniversary Edition",
    url: "https://pic.imgdb.cn/item/618142302ab3f51d911f21e4.jpg",
  },
  {
    title: "超激斗梦境",
    url: "https://pic.imgdb.cn/item/617123cc2ab3f51d919a8106.jpg",
  },
  {
    title: "永劫回廊",
    url: "https://pic.imgdb.cn/item/616278c32ab3f51d9153c431.jpg",
  },
  {
    title: "小小噩梦 Little Nightmares",
    url: "https://pic.imgdb.cn/item/615f8b972ab3f51d911daca2.jpg",
  },
  {
    title: "神明在上",
    url: "https://pic.imgdb.cn/item/615f8b922ab3f51d911da607.jpg",
  },
  {
    title: "超凡双生 Beyond Two Souls",
    url: "https://pic.imgdb.cn/item/615f8b8e2ab3f51d911da048.jpg",
  },
  {
    title: "逆水寒",
    url: "https://pic.imgdb.cn/item/614601e32ab3f51d9113edac.jpg",
  },
  {
    title: "非常英雄 Unruly Heroes",
    url: "https://pic.imgdb.cn/item/613dedfe44eaada73979811f.jpg",
  },
  {
    title: "荣耀战魂 For Honor",
    url: "https://pic.imgdb.cn/item/6126592244eaada739c4fd47.jpg",
  },
  {
    title: "热血少女物语 River City Girls",
    url: "https://pic.imgdb.cn/item/6117590d5132923bf8298ccc.jpg",
  },
  {
    title: "漫威复仇者 Marvel’s Avengers",
    url: "https://pic.imgdb.cn/item/611759065132923bf829687e.jpg",
  },
  {
    title: "幽林怪谈 Bladed Fury",
    url: "https://pic.imgdb.cn/item/611759015132923bf8294fca.jpg",
  },
  {
    title:
      "阿尼玛回忆之门-无名之史 Anima Gate of Memories - The Nameless Chronicles",
    url: "https://pic.imgdb.cn/item/60eaed6e5132923bf84aa6e7.jpg",
  },
  {
    title: "蜜蜂酿蜜之所 Where the Bees Make Honey",
    url: "https://pic.imgdb.cn/item/60e323d75132923bf8621980.jpg",
  },
  {
    title: "刺客信条3：解放 Assassins Creed III",
    url: "https://pic.imgdb.cn/item/60e1c85e5132923bf8b61524.jpg",
  },
  {
    title: "部落与弯刀",
    url: "https://pic.imgdb.cn/item/60e0519d5132923bf82b58a0.jpg",
  },
  {
    title: "忍者之印 Mark of The Ninja",
    url: "https://pic.imgdb.cn/item/60e0519a5132923bf82b4829.jpg",
  },
  {
    title: "斩服少女：异布 Kill la Kill the Game：IF",
    url: "https://pic.imgdb.cn/item/60cf54fb844ef46bb28139b4.jpg",
  },
  {
    title: "刺客信条3 Assassin’s Creed III",
    url: "https://pic.imgdb.cn/item/60cf54f7844ef46bb2810764.jpg",
  },
  {
    title: "刺客信条 启示录 Assassin’s Creed Revelations",
    url: "https://ftp.bmp.ovh/imgs/2021/06/e6f751864afb7ae8.webp",
  },
  {
    title: "笑傲江湖 OL",
    url: "https://ftp.bmp.ovh/imgs/2021/06/86c3bd23653cd709.webp",
  },
  {
    title: "乐高旋风忍者大电影",
    url: "https://ftp.bmp.ovh/imgs/2021/06/5fe6137db56637d9.webp",
  },
  {
    title: "古墓丽影 TombRaider",
    url: "https://ftp.bmp.ovh/imgs/2021/06/36879355fdceb0fd.webp",
  },
  {
    title: "战意",
    url: "https://ftp.bmp.ovh/imgs/2021/06/a28008901b922baa.webp",
  },
  {
    title: "拾荒者 Scavengers",
    url: "https://ftp.bmp.ovh/imgs/2021/06/9fb5c0c101239a98.webp",
  },
  {
    title: "龙崖",
    url: "https://ftp.bmp.ovh/imgs/2021/06/0182bd7ffd1aedca.webp",
  },
  {
    title: "暴雨 Heavy Rain",
    url: "https://ftp.bmp.ovh/imgs/2021/06/2b53c219573145b3.webp",
  },
  {
    title: "一起开火车 Unrailed!",
    url: "https://z3.ax1x.com/2021/04/19/cT0qv8.jpg",
  },
  {
    title: "无主之地 3",
    url: "https://z3.ax1x.com/2021/04/11/c00jyj.jpg",
  },
  {
    title: "超能队长的奇异冒险 The Awesome Adventures of Captain Spirit",
    url: "https://z3.ax1x.com/2021/03/17/6gCWvV.jpg",
  },
  {
    title: "劳拉和奥西里斯神庙 Lara Croft and The Temple of Osiris",
    url: "https://pic2.imgdb.cn/item/64551c6d0d2dde5777b8eaf2.jpg",
  },
  {
    title: "巫师 2",
    url: "https://pic2.imgdb.cn/item/64551c8b0d2dde5777b912ce.jpg",
  },
  {
    title: "剑灵",
    url: "https://pic2.imgdb.cn/item/64551ca70d2dde5777b93572.jpg",
  },
  {
    title: "梦塔防",
    url: "https://pic2.imgdb.cn/item/64551cc20d2dde5777b95bd5.jpg",
  },
  {
    title: "死亡搁浅 Death Stranding",
    url: "https://pic2.imgdb.cn/item/64551cda0d2dde5777b97702.jpg",
  },
  {
    title: "糖豆人 终极淘汰赛",
    url: "https://pic2.imgdb.cn/item/645646ed0d2dde5777079b88.jpg",
  },
  {
    title: "Apex 英雄",
    url: "https://pic2.imgdb.cn/item/645647330d2dde577707f945.jpg",
  },
  {
    title: "极限竞速 地平线 3",
    url: "https://pic2.imgdb.cn/item/645647690d2dde5777083caf.jpg",
  },
  {
    title: "Braveland",
    url: "https://pic2.imgdb.cn/item/645647840d2dde57770863ba.jpg",
  },
  {
    title: "The Vagrant",
    url: "https://pic2.imgdb.cn/item/645647950d2dde5777087bb5.jpg",
  },
  {
    title: "铸时匠",
    url: "https://pic2.imgdb.cn/item/645647b20d2dde577708a790.jpg",
  },
  {
    title: "彩虹坠入 IrisFall",
    url: "https://pic2.imgdb.cn/item/645647c10d2dde577708bc9a.jpg",
  },
  {
    title: "守望先锋 Overwatch",
    url: "https://pic2.imgdb.cn/item/645647d10d2dde577708d48a.jpg",
  },
  {
    title: "最终幻想 15",
    url: "https://pic2.imgdb.cn/item/645647e50d2dde577708f1a9.jpg",
  },
  {
    title: "最终幻想 零式 FINAL FANTASY TYPE-0",
    url: "https://pic2.imgdb.cn/item/645647f50d2dde57770905a5.jpg",
  },
  {
    title: "最终幻想 10",
    url: "https://pic2.imgdb.cn/item/6456480c0d2dde5777092631.jpg",
  },
  {
    title: "刺客信条 兄弟会 Assassins Creed Brotherhood",
    url: "https://pic2.imgdb.cn/item/64564fb50d2dde577715a7e7.jpg",
  },
  {
    title: "阿门罗 Armello",
    url: "https://pic2.imgdb.cn/item/64564e8e0d2dde577714039e.jpg",
  },
  {
    title: "Spellbreak",
    url: "https://pic2.imgdb.cn/item/64564e040d2dde57771368ad.jpg",
  },
  {
    title: "碧蓝幻想 Versus",
    url: "https://pic2.imgdb.cn/item/64564e8d0d2dde577714037a.jpg",
  },
  {
    title: "古剑奇谭 3",
    url: "https://pic2.imgdb.cn/item/64564f800d2dde5777154cf9.jpg",
  },
  {
    title: "命运 2",
    url: "https://pic2.imgdb.cn/item/64564f7f0d2dde5777154bb1.jpg",
  },
  {
    title: "泰坦陨落 2",
    url: "https://pic2.imgdb.cn/item/64564f7f0d2dde5777154adb.jpg",
  },
  {
    title: "激战 2",
    url: "https://s1.ax1x.com/2023/05/06/p9a5MH1.jpg",
  },
  {
    title: "武侠乂",
    url: "https://s1.ax1x.com/2023/05/06/p9a5uu9.jpg",
  },
  {
    title: "仙侠世界 2",
    url: "https://pic2.imgdb.cn/item/64564f360d2dde577714c841.jpg",
  },
  {
    title: "永恒轮回 黑色幸存者 Eternal Return Black Survival",
    url: "https://pic2.imgdb.cn/item/64564f380d2dde577714cb60.jpg",
  },
  {
    title: "在远方 追云者编年史 Yonder The Cloud Catcher Chronicles",
    url: "https://pic2.imgdb.cn/item/64564f370d2dde577714ca62.jpg",
  },
  {
    title: "战锤 末世鼠疫 2 Warhammer Vermintide 2",
    url: "https://pic2.imgdb.cn/item/64564f370d2dde577714c98a.jpg",
  },
  {
    title: "战国无双 真田丸",
    url: "https://pic2.imgdb.cn/item/64564f360d2dde577714c8ff.jpg",
  },
  {
    title: "质量效应 2 Mass.Effect.2",
    url: "https://pic2.imgdb.cn/item/645643620d2dde5777031e4b.jpg",
  },
  {
    title: "中土世界：暗影魔多",
    url: "https://pic2.imgdb.cn/item/645643500d2dde5777030b8c.jpg",
  },
  {
    title: "战神 God of War",
    url: "https://pic2.imgdb.cn/item/645643420d2dde577702fe06.jpg",
  },
  {
    title: "酉闪町 DuskDiver",
    url: "https://pic2.imgdb.cn/item/6456431b0d2dde577702d1a7.jpg",
  },
  {
    title: "永恒之塔",
    url: "https://pic2.imgdb.cn/item/6456430b0d2dde577702c07e.jpg",
  },
  {
    title: "无主之地 2",
    url: "https://s1.ax1x.com/2023/05/06/p9a5FA0.jpg",
  },
  {
    title: "雨纪",
    url: "https://pic2.imgdb.cn/item/645642e60d2dde577702981e.jpg",
  },
  {
    title: "羞辱 Dishonored",
    url: "https://pic2.imgdb.cn/item/645642ce0d2dde5777027d56.jpg",
  },
  {
    title: "旺达与巨象 Shadow of the Colossus",
    url: "https://pic2.imgdb.cn/item/645642bf0d2dde5777026e9f.jpg",
  },
  {
    title: "我在 7 年后等着你",
    url: "https://pic2.imgdb.cn/item/645642ad0d2dde5777025c37.jpg",
  },
  {
    title: "铁拳 7",
    url: "https://pic2.imgdb.cn/item/6456429e0d2dde5777024a39.jpg",
  },
  {
    title: "泰亚史诗",
    url: "https://pic2.imgdb.cn/item/645642900d2dde5777023b69.jpg",
  },
  {
    title: "神舞幻想",
    url: "https://pic2.imgdb.cn/item/645642810d2dde57770228d4.jpg",
  },
  {
    title: "天命奇御",
    url: "https://pic2.imgdb.cn/item/6456426c0d2dde5777021145.jpg",
  },
  {
    title: "全面战争战锤 2 Total War WARHAMMER II",
    url: "https://pic2.imgdb.cn/item/645642590d2dde577701f9da.jpg",
  },
  {
    title: "瑞奇与叮当 Ratchet & Clank",
    url: "https://pic2.imgdb.cn/item/645642430d2dde577701e492.jpg",
  },
  {
    title: "龙之皇冠 Dragons Crown Pro",
    url: "https://pic2.imgdb.cn/item/645642310d2dde577701cd12.jpg",
  },
  {
    title: "去月球",
    url: "https://pic2.imgdb.cn/item/645642110d2dde5777019bbb.jpg",
  },
  {
    title: "龙之谷",
    url: "https://pic2.imgdb.cn/item/645641ff0d2dde57770181a5.jpg",
  },
  {
    title: "猎天使魔女",
    url: "https://pic2.imgdb.cn/item/645641ef0d2dde5777016d59.jpg",
  },
  {
    title: "救赎之路 Sinner",
    url: "https://pic2.imgdb.cn/item/645641dc0d2dde57770152f1.jpg",
  },
  {
    title: "加速世界VS刀剑神域：千年的黄昏",
    url: "https://pic2.imgdb.cn/item/645641c30d2dde5777013151.jpg",
  },
  {
    title: "地平线：零之曙光 Horizon Zero Dawn",
    url: "https://pic2.imgdb.cn/item/645641b40d2dde5777011206.jpg",
  },
  {
    title: "花园之间 The Gardens Between",
    url: "https://pic2.imgdb.cn/item/6456419e0d2dde577700ecf5.jpg",
  },
  {
    title: "荒野大嫖客 2",
    url: "https://pic2.imgdb.cn/item/64551db70d2dde5777ba9b55.jpg",
  },
  {
    title: "虎豹骑",
    url: "https://pic2.imgdb.cn/item/64551da30d2dde5777ba8631.jpg",
  },
  {
    title: "格斗领域 EX FIGHTING EX LAYER",
    url: "https://pic2.imgdb.cn/item/64551d880d2dde5777ba6527.jpg",
  },
  {
    title: "Goat Of Duty",
    url: "https://pic2.imgdb.cn/item/64551d740d2dde5777ba47e4.jpg",
  },
  {
    title: "KurtzPel",
    url: "https://pic2.imgdb.cn/item/64551d610d2dde5777ba301c.jpg",
  },
  {
    title: "刺客信条 2",
    url: "https://pic2.imgdb.cn/item/64551d530d2dde5777ba1e5c.jpg",
  },
  {
    title: "恶果之地",
    url: "https://pic2.imgdb.cn/item/64551d440d2dde5777ba06c3.jpg",
  },
  {
    title: "天谕",
    url: "https://pic2.imgdb.cn/item/64551d280d2dde5777b9e245.png",
  },
];
