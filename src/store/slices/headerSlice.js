export const createHeaderSlice = (set) => ({
  isDark: true, //Header đang tối (đen) hay không
  headerBtnIsShown: true, //Các nút Header đang hiện hay không
  expanseMenuIsOpen: false, //Menu có được mở hay không
  headerCanChangeColor: true, //Header được đổi màu hay khôn
  bottomNavIsShown: true, //Nút nav (contact) ở dưới hiện hay không
  headerIsSticky: true, //Menu có sticky hay không
  setToDark: () => set({ isDark: true }), //->Header sang đen
  setToLight: () => set({ isDark: false }), //->Header sang trắng
  hideHeaderBtn: () => set({ headerBtnIsShown: false }), //->Ẩn các nút trên Header
  showHeaderBtn: () => set({ headerBtnIsShown: true }), //->Hiện các nút trên Header
  setHeaderCanChangeColor: () => set({ headerCanChangeColor: true }), //Cho phép đổi màu
  setHeaderCanNotChangeColor: () => set({ headerCanChangeColor: false }), //Không cho phép đổi màu
  setExpanseMenuIsOpen: (expanseState = false) =>
    set({ expanseMenuIsOpen: expanseState }), // Set menu có mở hay không
  setBottomNavIsShown: (statePayload) =>
    set({ bottomNavIsShown: statePayload }), // Set nút contact bên dưới mở hay
  setHeaderStickyState: (statePayload) => set({ headerIsSticky: statePayload }),
});
