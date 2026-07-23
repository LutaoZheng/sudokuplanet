export const COLORS = {
  bg:0xf3f4f8, bg2:0xfafaff, card:0xffffff, cardLight:0xf3f2ff,
  primary:0x6c63e8, secondary:0x58bfae, text:0x20243a, muted:0x7e849b,
  gold:0xe9a934, danger:0xe85d75, border:0xe6e8f0, board:0xffffff,
  ink:0x292d42, player:0x565fdb, highlight:0xf1f2fb, selected:0xdedfff, related:0xe9eaff,
  purpleSoft:0xeeeefe, warm:0xfff7df
};
export const FONT = 'Arial, "PingFang SC", sans-serif';
export const hex=(color:number)=>`#${color.toString(16).padStart(6,'0')}`;
