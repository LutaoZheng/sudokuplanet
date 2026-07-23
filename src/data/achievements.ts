export interface Achievement { id:string;name:string;description:string;reward:number;icon:string;hidden?:boolean; }
export const ACHIEVEMENTS:Achievement[]=[
  {id:'tutorial',name:'启程星球',description:'完成新手引导',reward:30,icon:'🚀'},
  {id:'first_win',name:'新手入门',description:'完成第一局数独',reward:20,icon:'🌱'},
  {id:'ten_wins',name:'数独爱好者',description:'累计完成10局',reward:60,icon:'🧩'},
  {id:'hundred_wins',name:'百局历练',description:'累计完成100局',reward:300,icon:'♜'},
  {id:'perfect',name:'初次完美',description:'首次零错误完成',reward:30,icon:'◇'},
  {id:'perfect_10',name:'完美玩家',description:'零错误完成10局',reward:120,icon:'💎'},
  {id:'speed_hard',name:'速度之王',description:'5分钟内完成困难模式',reward:100,icon:'⚡'},
  {id:'streak_7',name:'连续挑战',description:'连续7天完成每日挑战',reward:150,icon:'🔥'},
  {id:'hundred_levels',name:'百关征服者',description:'完成100个成长关卡',reward:400,icon:'🏆'},
  {id:'star_master',name:'大师之路',description:'累计获得100颗星',reward:250,icon:'★'},
  {id:'star_30',name:'星光初现',description:'累计获得30颗星',reward:80,icon:'☆'},
  {id:'no_hint_10',name:'独立思考',description:'10局不使用提示',reward:100,icon:'✦'},
  {id:'casual_25',name:'星球启航',description:'完成休闲模式第一章',reward:120,icon:'◉'},
  {id:'normal_25',name:'逻辑萌芽',description:'完成标准模式第一章',reward:150,icon:'♧'},
  {id:'challenge_25',name:'挑战之心',description:'完成挑战模式第一章',reward:180,icon:'◆'},
  {id:'master_first',name:'大师试炼',description:'完成大师模式第一关',reward:100,icon:'♛',hidden:true},
  {id:'fast_180',name:'电光石火',description:'3分钟内完成一局',reward:150,icon:'☄',hidden:true},
  {id:'three_star_10',name:'完美星图',description:'累计10关获得三星',reward:160,icon:'✺',hidden:true},
  {id:'streak_30',name:'恒心如一',description:'连续挑战30天',reward:500,icon:'☀',hidden:true},
  {id:'legend',name:'数独传奇',description:'玩家等级达到100级',reward:1000,icon:'👑',hidden:true}
];
