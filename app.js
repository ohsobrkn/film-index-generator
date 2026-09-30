/**
 * 海带索引图 FILM - 胶片索引图生成器
 *
 * 作者: Judian99
 * 小红书: 3661182800
 * 抖音: 69530829181
 * 邮箱: 1946378724@qq.com
 * GitHub: https://github.com/Judian99/film-index-generator
 * 许可证: MIT
 *
 * 图片只在浏览器本地处理，不上传服务器。
 */

(function () {
  const fileInput = document.getElementById("fileInput");
  const dropZone = document.getElementById("dropZone");
  const previewWrap = document.getElementById("previewWrap");
  const previewCanvas = document.getElementById("previewCanvas");
  const emptyState = document.getElementById("emptyState");
  const statusTitle = document.getElementById("statusTitle");
  const imageCounter = document.getElementById("imageCounter");
  const exportButton = document.getElementById("exportButton");
  const reverseSort = document.getElementById("reverseSort");
  const sortSegmented = document.querySelector(".sort-segmented");
  const showEdgeText = document.getElementById("showEdgeText");
  const showSprockets = document.getElementById("showSprockets");
  const imageInSprockets = document.getElementById("imageInSprockets");
  const imageInEdgeText = document.getElementById("imageInEdgeText");
  const imageCoverageHint = document.getElementById("imageCoverageHint");
  const sprocketsHint = document.getElementById("sprocketsHint");
  const showLeader = document.getElementById("showLeader");
  const leaderHint = document.getElementById("leaderHint");
  const leaderDirectionField = document.getElementById("leaderDirectionField");
  const leaderDirectionSelect = document.getElementById("leaderDirection");
  const backgroundStyle = document.getElementById("backgroundStyle");
  const backgroundBlurField = document.getElementById("backgroundBlurField");
  const backgroundBlur = document.getElementById("backgroundBlur");
  const backgroundBlurValue = document.getElementById("backgroundBlurValue");
  const backgroundHint = document.getElementById("backgroundHint");
  const stockSelect = document.getElementById("stockSelect");
  const stockSearch = document.getElementById("stockSearch");
  const stockSearchStatus = document.getElementById("stockSearchStatus");
  const stockName = document.getElementById("stockName");
  const stockEdgeText = document.getElementById("stockEdgeText");
  const stockProcess = document.getElementById("stockProcess");
  const stockInkEnabled = document.getElementById("stockInkEnabled");
  const stockInkField = document.getElementById("stockInkField");
  const stockInkColor = document.getElementById("stockInkColor");
  const stockPresets = document.getElementById("stockPresets");
  const stockFrameNumber = document.getElementById("stockFrameNumber");
  const stockSaveButton = document.getElementById("stockSaveButton");
  const stockDeleteButton = document.getElementById("stockDeleteButton");
  const stockExportButton = document.getElementById("stockExportButton");
  const stockImportButton = document.getElementById("stockImportButton");
  const stockImportInput = document.getElementById("stockImportInput");
  const frameAspect = document.getElementById("frameAspect");
  const wideSpecField = document.getElementById("wideSpecField");
  const wideSpecSelect = document.getElementById("wideSpecSelect");
  const halfFrameModeField = document.getElementById("halfFrameModeField");
  const halfFrameModeInputs = document.querySelectorAll("input[name='halfFrameMode']");
  const columnsSelect = document.getElementById("columnsSelect");
  const columnsHint = document.getElementById("columnsHint");
  const frameWidthInput = document.getElementById("frameWidth");
  const exportScale = document.getElementById("exportScale");
  const exportPagePreset = document.getElementById("exportPagePreset");
  const a4SingleLandscapeField = document.getElementById("a4SingleLandscapeField");
  const a4SingleLandscape = document.getElementById("a4SingleLandscape");
  const a4RealMergeField = document.getElementById("a4RealMergeField");
  const a4RealMergeMode = document.getElementById("a4RealMergeMode");
  const a4RealPdfDpiField = document.getElementById("a4RealPdfDpiField");
  const a4RealPdfDpi = document.getElementById("a4RealPdfDpi");
  const exportModalPdf = document.getElementById("exportModalPdf");
  const formatSelect = document.getElementById("formatSelect");
  const qualityField = document.getElementById("qualityField");
  const jpgQuality = document.getElementById("jpgQuality");
  const zoomRange = document.getElementById("zoomRange");
  const zoomOut = document.getElementById("zoomOut");
  const zoomIn = document.getElementById("zoomIn");
  const zoomFit = document.getElementById("zoomFit");
  const lightTableButton = document.getElementById("lightTableButton");
  const frameSelectButton = document.getElementById("frameSelectButton");
  const clearFrameSelectionButton = document.getElementById("clearFrameSelectionButton");
  const batchFrameExportButton = document.getElementById("batchFrameExportButton");
  const frameSelectionCounter = document.getElementById("frameSelectionCounter");
  const lightTableHud = document.getElementById("lightTableHud");
  const lightTableExit = document.getElementById("lightTableExit");
  const lightTableStatus = document.getElementById("lightTableStatus");
  const loupeMagnificationReadout = document.getElementById("loupeMagnification");
  const opticalLoupe = document.getElementById("opticalLoupe");
const loupeFrameTag = document.getElementById("loupeFrameTag");
  const opticalLoupeCanvas = document.getElementById("opticalLoupeCanvas");
  const photoListPanel = document.getElementById("photoListPanel");
  const photoListCount = document.getElementById("photoListCount");
  const photoList = document.getElementById("photoList");
  const clearButton = document.getElementById("clearButton");
  const noticeEl = document.getElementById("notice");
  const frameMenu = document.getElementById("frameMenu");
  const cropModal = document.getElementById("cropModal");
  const cropCanvas = document.getElementById("cropCanvas");
  const cropOverlay = document.getElementById("cropOverlay");
  const cropClose = document.getElementById("cropClose");
  const cropCancel = document.getElementById("cropCancel");
  const cropReset = document.getElementById("cropReset");
  const cropRestoreOriginal = document.getElementById("cropRestoreOriginal");
  const cropApply = document.getElementById("cropApply");
  const frameExportModal = document.getElementById("frameExportModal");
  const frameExportTitle = document.getElementById("frameExportTitle");
  const frameExportCanvas = document.getElementById("frameExportCanvas");
  const frameExportMeta = document.getElementById("frameExportMeta");
  const frameExportScale = document.getElementById("frameExportScale");
  const frameExportFormat = document.getElementById("frameExportFormat");
  const frameExportQualityField = document.getElementById("frameExportQualityField");
  const frameExportQuality = document.getElementById("frameExportQuality");
  const frameExportQualityValue = document.getElementById("frameExportQualityValue");
  const frameExportSize = document.getElementById("frameExportSize");
  const frameExportStatus = document.getElementById("frameExportStatus");
  const frameExportClose = document.getElementById("frameExportClose");
  const frameExportCancel = document.getElementById("frameExportCancel");
  const frameExportApply = document.getElementById("frameExportApply");
  const exportModal = document.getElementById("exportModal");
  const exportModalClose = document.getElementById("exportModalClose");
  const exportModalCancel = document.getElementById("exportModalCancel");
  const exportModalConfirm = document.getElementById("exportModalConfirm");
  const exportMemoryWarning = document.getElementById("exportMemoryWarning");
  const showInfoBlockInput = document.getElementById("showInfoBlock");
  const infoBlockFields = document.getElementById("infoBlockFields");
  const infoBlockFontSelect = document.getElementById("infoBlockFont");
  const infoBlockOpacityInput = document.getElementById("infoBlockOpacity");
  const infoBlockBlurInput = document.getElementById("infoBlockBlur");
  const infoBlockTemplateSelect = document.getElementById("infoBlockTemplate");
  const infoBlockBgSelect = document.getElementById("infoBlockBg");
  const infoBlockCanisterSideSelect = document.getElementById("infoBlockCanisterSide");
  const infoBlockImageInput = document.getElementById("infoBlockImageInput");
  const infoBlockImageClear = document.getElementById("infoBlockImageClear");
  const infoBlockOpacityValue = document.getElementById("infoBlockOpacityValue");
  const infoBlockBlurValue = document.getElementById("infoBlockBlurValue");
  const infoBlockRadiusInput = document.getElementById("infoBlockRadius");
  const infoBlockRadiusValue = document.getElementById("infoBlockRadiusValue");
  const infoBlockFeatherInput = document.getElementById("infoBlockFeather");
  const infoBlockProportionButton = document.getElementById("infoBlockProportionButton");
  const infoBlockProportionModal = document.getElementById("infoBlockProportionModal");
  const infoBlockProportionPreview = document.getElementById("infoBlockProportionPreview");
  const filmStage = document.getElementById("filmStage");
  const filmTitle = document.getElementById("filmTitle");
  const filmDescription = document.getElementById("filmDescription");

  let activeCanvas = previewCanvas;
  let ctx = previewCanvas.getContext("2d");

  // 索引信息区块状态：暗盒位图与字体按需加载缓存
  let infoBlockCanisterImage = null;
  let loadedInfoBlockFontWeight = "";
  const infoBlockFontRequests = new Map();

  // 字段占比（FILM / DATE / CAMERA·LENS / REMARKS 相对宽度），localStorage 持久化
  const INFO_BLOCK_DEFAULT_WEIGHTS = [0.85, 1, 1.45, 1.1];
  let infoBlockWeights = (() => {
    try {
      const raw = JSON.parse(localStorage.getItem("infoBlockWeights") || "null");
      if (Array.isArray(raw) && raw.length === 4
        && raw.every((value) => Number.isFinite(value) && value >= 0.3 && value <= 2.5)) {
        return raw.map(Number);
      }
    } catch (error) { /* 忽略损坏数据 */ }
    return INFO_BLOCK_DEFAULT_WEIGHTS.slice();
  })();

  function saveInfoBlockWeights() {
    try {
      localStorage.setItem("infoBlockWeights", JSON.stringify(infoBlockWeights));
    } catch (error) { /* 隐私模式等场景静默失败 */ }
  }

  // 暗盒缩放（0.5–3.0，默认 1 = 现状适配），localStorage 持久化；接近字段框高度时吸附对齐
  const CANISTER_SCALE_MIN = 0.5;
  const CANISTER_SCALE_MAX = 3;
  let infoBlockCanisterScale = (() => {
    const raw = Number(localStorage.getItem("infoBlockCanisterScale"));
    return Number.isFinite(raw) && raw > 0 ? clamp(raw, CANISTER_SCALE_MIN, CANISTER_SCALE_MAX) : 1;
  })();

  function saveInfoBlockCanisterScale() {
    try {
      localStorage.setItem("infoBlockCanisterScale", String(infoBlockCanisterScale));
    } catch (error) { /* 隐私模式等场景静默失败 */ }
  }

  const state = {
    items: [],
    renderTimer: 0,
    animationTimer: 0,
    noticeTimer: 0,
    nextId: 1,
    dragId: null,
    previewZoom: Number(zoomRange.value) / 100,
    // 画布交互：预览帧的命中区域、画布拖拽状态
    frameRects: [],
    selectedFrameIds: new Set(),
    frameSelectionMode: false,
    frameSelectionAnchorId: null,
    canvasDrag: null,
    dragItemId: null,
    dropIndex: null,
    // 胶卷型号：自定义型号数组 + 当前选中 id（启动时从 localStorage 恢复）
    customStocks: [],
    stockId: null,
    // 帧操作菜单与裁切工具
    contextItemId: null,
    frameMenuScope: "frame",
    // 信息栏暗盒：点击命中矩形 + 吸附判据所需几何（渲染时记录）
    infoBlockCanisterHit: null,
    infoBlockCanisterGeom: null,
    backgroundItemId: null,
    cropState: null,
    cropRequestGeneration: 0,
    frameExportState: null,
    reprocessGeneration: 0,
    manual135Columns: Number(columnsSelect.value) || 6,
    manualHalfColumns: Math.max(4, Number(columnsSelect.value) || 6),
    sortMode: document.querySelector("input[name='sortMode']:checked").value,
    sortRequestGeneration: 0,
    exportHydrationItems: null,
    exportCancelled: false,
    sourceCommitPromise: Promise.resolve(),
    isExporting: false,
    lightTable: {
      active: false,
      magnification: 12,
      pointer: null,
      focusMode: false,
      focusPan: null,
      pointerLockOwned: false,
      rafId: 0,
      resizeRafId: 0,
      hydrationTimer: 0,
      hydrationRequestId: 0,
      activeItemId: null,
      samplePoint: null,
      brightness: 100,
      hudStatusTimer: 0,
      pinch: null,
      frameTagKey: "",
      transitionId: 0,
      session: null,
      sortedItems: null,
      tileCanvas: null,
    },
  };

  // ---- 胶卷型号：内置与自定义同构的型号对象，按冲洗工艺分档取默认外观 ----

  // 每档工艺的默认外观；型号对象省略（null/缺省）的字段从这里取
  const PROCESS_DEFAULTS = {
    "C-41": {
      // 彩负边字是曝光后的橙色染料影像
      edgeInk: { color: "rgba(255, 176, 64, 0.92)", glow: "rgba(255, 170, 60, 0.45)" },
      edgePresets: ["135-36", "C-41", "DX 5063", "SAFETY FILM", "135"],
      edgePresets120: ["120", "C-41", "SAFETY FILM"],
      frameNumberStyle: "N/NA",
    },
    BW: {
      // 黑白负片边字是银盐影像，呈亮白/浅灰，无橙色染料
      edgeInk: { color: "rgba(238, 238, 232, 0.92)", glow: "rgba(240, 240, 235, 0.35)" },
      edgePresets: ["135-36", "SAFETY FILM", "DX 5063", "PANCHROMATIC", "135"],
      edgePresets120: ["120", "SAFETY FILM", "PANCHROMATIC"],
      frameNumberStyle: "N/NA",
    },
    "E-6": {
      // 反转片边字取暖肤色 #f9c394（可读性优先，非严格拟真的暗色）
      edgeInk: { color: "rgba(249, 195, 148, 0.92)", glow: "rgba(249, 195, 148, 0.4)" },
      edgePresets: ["135-36", "E-6", "SAFETY FILM", "135"],
      edgePresets120: ["120", "E-6"],
      frameNumberStyle: "N",
    },
    "ECN-2": {
      edgeInk: { color: "rgba(250, 230, 190, 0.92)", glow: "rgba(250, 230, 190, 0.35)" },
      edgePresets: ["EASTMAN", "KEEP FILM 5219", "ECN-2", "SAFETY FILM"],
      edgePresets120: ["EASTMAN", "ECN-2", "SAFETY FILM"],
      frameNumberStyle: "N",
    },
  };
  const PROCESS_NAMES = Object.keys(PROCESS_DEFAULTS);
  const PROCESS_SEARCH_TERMS = {
    "C-41": "彩色负片 彩负",
    BW: "黑白负片 黑白",
    "E-6": "反转片 正片",
    "ECN-2": "电影卷 电影胶片",
  };

  const BUILTIN_STOCKS = [
    // Kodak 彩色负片
    { id: "kodak-portra-400", name: "Kodak Portra 400", edgeText: "KODAK PORTRA 400", process: "C-41" },
    { id: "kodak-portra-800", name: "Kodak Portra 800", edgeText: "KODAK PORTRA 800", process: "C-41" },
    { id: "kodak-gold-200", name: "Kodak Gold 200", edgeText: "KODAK GOLD 200", process: "C-41" },
    { id: "kodak-colorplus-200", name: "Kodak ColorPlus 200", edgeText: "KODAK COLORPLUS 200", process: "C-41" },
    { id: "kodak-ultramax-400", name: "Kodak UltraMax 400", edgeText: "KODAK ULTRAMAX 400", process: "C-41" },
    { id: "kodak-ektar-100", name: "Kodak Ektar 100", edgeText: "KODAK EKTAR 100", process: "C-41" },

    // Kodak 黑白胶片
    { id: "kodak-tri-x-400", name: "Kodak Tri-X 400", edgeText: "KODAK TRI-X 400", process: "BW" },
    { id: "kodak-tmax-100", name: "Kodak T-Max 100", edgeText: "KODAK T-MAX 100", process: "BW" },
    { id: "kodak-tmax-400", name: "Kodak T-Max 400", edgeText: "KODAK T-MAX 400", process: "BW" },
    { id: "kodak-px-125", name: "Kodak P3200", edgeText: "KODAK P3200", process: "BW" },

    // Fujifilm 彩色负片
    { id: "fujifilm-100", name: "Fujifilm 100", edgeText: "FUJIFILM 100", process: "C-41" },
    { id: "fujifilm-400", name: "Fujifilm 400", edgeText: "FUJIFILM 400", process: "C-41" },
    { id: "fujifilm-c400", name: "Fujifilm C400", edgeText: "FUJIFILM C400", process: "C-41" },
    { id: "fujicolor-c200", name: "Fujicolor C200", edgeText: "FUJICOLOR C200", process: "C-41" },
    { id: "fujifilm-superia-400", name: "Fujifilm Superia 400", edgeText: "FUJIFILM SUPERIA 400", process: "C-41" },

    // Fujifilm 反转片
    { id: "fujichrome-velvia-50", name: "Fujichrome Velvia 50", edgeText: "FUJICHROME VELVIA 50", process: "E-6" },
    { id: "fujichrome-provia-100f", name: "Fujichrome Provia 100F", edgeText: "FUJICHROME PROVIA 100F", process: "E-6" },

    // Ilford 黑白胶片
    { id: "ilford-hp5-plus-400", name: "Ilford HP5 Plus 400", edgeText: "ILFORD HP5 PLUS 400", process: "BW" },
    { id: "ilford-fp4-plus-125", name: "Ilford FP4 Plus 125", edgeText: "ILFORD FP4 PLUS 125", process: "BW" },
    { id: "ilford-delta-400", name: "Ilford Delta 400", edgeText: "ILFORD DELTA 400", process: "BW" },
    { id: "ilford-delta-100", name: "Ilford Delta 100", edgeText: "ILFORD DELTA 100", process: "BW" },
    { id: "ilford-delta-3200", name: "Ilford Delta 3200", edgeText: "ILFORD DELTA 3200", process: "BW" },
    { id: "ilford-pan-f-plus-50", name: "Ilford Pan F Plus 50", edgeText: "ILFORD PAN F PLUS 50", process: "BW" },
    { id: "ilford-xp2-super", name: "Ilford XP2 Super", edgeText: "ILFORD XP2 SUPER", process: "C-41" },

    // Harman 彩色负片
    { id: "harman-phoenix-200", name: "Harman Phoenix Ⅱ 200", edgeText: "HARMAN PHOENIX Ⅱ 200", process: "C-41", edgePresets: ["HARMAN PHOENIX Ⅱ 200"] },

    // 电影卷
    { id: "cinestill-800t", name: "CineStill 800T", edgeText: "CINESTILL 800T", process: "ECN-2", sprocketsIn120: true },
    { id: "cinestill-50d", name: "CineStill 50D", edgeText: "CINESTILL 50D", process: "ECN-2", sprocketsIn120: true },
    { id: "cinestill-400d", name: "CineStill 400D", edgeText: "CINESTILL 400D", process: "ECN-2", sprocketsIn120: true },
    { id: "cinestill-bwxx", name: "CineStill bwXX", edgeText: "CINESTILL bwXX", process: "BW", sprocketsIn120: true },

    // Kodak Vision3 电影胶片
    { id: "kodak-vision3-500t-5219", name: "Kodak Vision3 500T (5219)", edgeText: "KODAK VISION3 500T", process: "ECN-2", sprocketsIn120: true },
    { id: "kodak-vision3-500t-7219", name: "Kodak Vision3 500T (7219)", edgeText: "KODAK VISION3 500T", process: "ECN-2", sprocketsIn120: true },
    { id: "kodak-vision3-250d-5207", name: "Kodak Vision3 250D (5207)", edgeText: "KODAK VISION3 250D", process: "ECN-2", sprocketsIn120: true },
    { id: "kodak-vision3-250d-7207", name: "Kodak Vision3 250D (7207)", edgeText: "KODAK VISION3 250D", process: "ECN-2", sprocketsIn120: true },
    { id: "kodak-vision3-200t-5213", name: "Kodak Vision3 200T (5213)", edgeText: "KODAK VISION3 200T", process: "ECN-2", sprocketsIn120: true },
    { id: "kodak-vision3-200t-7213", name: "Kodak Vision3 200T (7213)", edgeText: "KODAK VISION3 200T", process: "ECN-2", sprocketsIn120: true },
    { id: "kodak-vision3-160-7211", name: "Kodak Vision3 160 (7211)", edgeText: "KODAK VISION3 160", process: "ECN-2", sprocketsIn120: true },
    { id: "kodak-vision3-50d-5203", name: "Kodak Vision3 50D (5203)", edgeText: "KODAK VISION3 50D", process: "ECN-2", sprocketsIn120: true },
    { id: "kodak-vision3-50d-7203", name: "Kodak Vision3 50D (7203)", edgeText: "KODAK VISION3 50D", process: "ECN-2", sprocketsIn120: true },

    // Kodak Vision2 电影胶片
    { id: "kodak-vision2-500t-5218", name: "Kodak Vision2 500T (5218)", edgeText: "KODAK VISION2 500T", process: "ECN-2", sprocketsIn120: true },
    { id: "kodak-vision2-500t-7218", name: "Kodak Vision2 500T (7218)", edgeText: "KODAK VISION2 500T", process: "ECN-2", sprocketsIn120: true },
    { id: "kodak-vision2-250d-5205", name: "Kodak Vision2 250D (5205)", edgeText: "KODAK VISION2 250D", process: "ECN-2", sprocketsIn120: true },
    { id: "kodak-vision2-100t-7212", name: "Kodak Vision2 100T (7212)", edgeText: "KODAK VISION2 100T", process: "ECN-2", sprocketsIn120: true },

    // Kodak 其他电影胶片
    { id: "kodak-5247-250t", name: "Kodak 5247 250T", edgeText: "KODAK 5247 250T", process: "ECN-2", sprocketsIn120: true },
    { id: "kodak-5287-200t", name: "Kodak 5287 200T", edgeText: "KODAK 5287 200T", process: "ECN-2", sprocketsIn120: true },
    { id: "kodak-5293-500t", name: "Kodak 5293 500T", edgeText: "KODAK 5293 500T", process: "ECN-2", sprocketsIn120: true },
    { id: "kodak-exr-500t-5279", name: "Kodak EXR 500T (5279)", edgeText: "KODAK EXR 500T", process: "ECN-2", sprocketsIn120: true },
    { id: "kodak-exr-500t-7279", name: "Kodak EXR 500T (7279)", edgeText: "KODAK EXR 500T", process: "ECN-2", sprocketsIn120: true },

    // Fujifilm 电影胶片
    { id: "fujifilm-eterna-500t", name: "Fujifilm Eterna 500T", edgeText: "FUJI ETERNA 500T", process: "ECN-2", sprocketsIn120: true },
    { id: "fujifilm-eterna-250t", name: "Fujifilm Eterna 250T", edgeText: "FUJI ETERNA 250T", process: "ECN-2", sprocketsIn120: true },
    { id: "fujifilm-reala-500d", name: "Fujifilm Reala 500D", edgeText: "FUJI REALA 500D", process: "ECN-2", sprocketsIn120: true },
    { id: "fujifilm-f-64d", name: "Fujifilm F-64D", edgeText: "FUJI F-64D", process: "ECN-2", sprocketsIn120: true },

    // 其他电影胶片品牌
    { id: "ortwo-un54", name: "Orwo UN54 (NP20)", edgeText: "ORWO UN54", process: "BW", sprocketsIn120: true },
    { id: "ortwo-n74-plus", name: "Orwo N74 Plus", edgeText: "ORWO N74 PLUS", process: "BW", sprocketsIn120: true },
    { id: "silberra-p-an100-t", name: "Silberra P-A100-T", edgeText: "SILBERRA P-A100-T", process: "BW", sprocketsIn120: true },

    // Foma 黑白胶片
    { id: "fomapan-100", name: "Fomapan 100", edgeText: "FOMAPAN 100", process: "BW" },
    { id: "fomapan-200", name: "Fomapan 200", edgeText: "FOMAPAN 200", process: "BW" },
    { id: "fomapan-400", name: "FOMAPAN 400", edgeText: "FOMAPAN 400", process: "BW" },

    // 乐凯
    { id: "lucky-c200", name: "Lucky C200 乐凯彩色负片", edgeText: "LUCKY C200", process: "C-41" },
    { id: "lucky-c400", name: "Lucky C400 乐凯彩色负片", edgeText: "LUCKY C400", process: "C-41" },
    { id: "lucky-shd-100", name: "Lucky SHD 100 乐凯黑白", edgeText: "LUCKY SHD 100", process: "BW" },
    { id: "lucky-shd-400", name: "Lucky SHD 400 乐凯黑白", edgeText: "LUCKY SHD 400", process: "BW" },

    // Lomography
    { id: "lomography-color-400", name: "Lomography Color 400", edgeText: "LOMOGRAPHY COLOR 400", process: "C-41" },
    { id: "lomography-color-800", name: "Lomography Color 800", edgeText: "LOMOGRAPHY COLOR 800", process: "C-41" },

    // 其他
    { id: "kentmere-400", name: "Kentmere 400", edgeText: "KENTMERE 400", process: "BW" },
  ].map((stock) => ({ ...stock, builtin: true }));

  const FilmFrame135 = window.FilmFrame135;
  if (!FilmFrame135) throw new Error("FilmFrame135 renderer is unavailable.");
  const FilmFrame = window.FilmFrame;
  if (!FilmFrame) throw new Error("FilmFrame renderer is unavailable.");
  const OpticalLoupe = window.OpticalLoupe;
  if (!OpticalLoupe) throw new Error("OpticalLoupe renderer is unavailable.");
  const loupeRenderer = OpticalLoupe.createRenderer(opticalLoupeCanvas);

  const DEFAULT_STOCK_ID = "kodak-portra-400";
  const STORAGE_STOCKS_KEY = "filmIndex.customStocks";
  const STORAGE_SELECTED_KEY = "filmIndex.selectedStock";

  // 可调渲染参数（均为相对"单张宽度"或所在分区的比例）。
  // 侧栏"高级设置"菜单内有滑块可实时调整。
  const TUNE = {
    ...FilmFrame135.DEFAULT_TUNE_135,
    fontSize120: 0.74, // 120 字号 / 边字带高度
    textOffsetY: 0.38, // 边字中线到胶片外缘的距离 / 边字带高度（真实底片边字几乎贴着片边）
    textSprocketGap: 0.022, // 齿孔带向边字方向收紧的距离 / frameW（越大边字与齿孔离得越近）
    textSprocketGap120: 0.015, // 120 齿孔带向边字方向收紧的距离 / 画幅高
    band120: 0.034, // 120 边字带高度 / 画幅高
    gap120: 0.085, // 120 帧间隙 / 画幅高
    margin135: -0.04, // 135 每行左右外侧边距 / frameW（固化参数）
    margin120: 0, // 120 每行左右外侧边距 / 画幅高
  };

  // 浏览器 canvas 尺寸安全上限（保守取值，超出后 toBlob 会得到 null）
  const MAX_CANVAS_SIDE = 16384;
  const MAX_CANVAS_AREA = 16384 * 16384;
  const EXPORT_TILE_SIDE = 8192;
  const PNG_MAX_DIMENSION = 0x7fffffff;

  // 观片器倍率（相对预览显示尺寸的线性放大）无极调节区间
  const LOUPE_MIN_MAGNIFICATION = 1;
  const LOUPE_MAX_MAGNIFICATION = 60;

  // 观片台增强：档位预设 / 灯箱亮度区间 / HUD 自动淡出时长 / 长按选帧阈值
  const LOUPE_MAG_PRESETS = [1, 4, 8, 16];
  const LIGHTBOX_MIN_BRIGHTNESS = 70;
  const LIGHTBOX_MAX_BRIGHTNESS = 115;
  const HUD_IDLE_FADE_MS = 2800;
  const LONG_PRESS_SELECT_MS = 480;

  const filmStageStates = {
    intro: {
      title: "装入你的底片扫描件",
      description: "图片只在浏览器本地整理，生成一张可导出的胶片索引图。",
    },
    dragging: {
      title: "释放以装入扫描件",
      description: "检片轨道已就绪，支持 JPG、PNG 与 WebP。",
    },
    reading: {
      title: "正在读取扫描件",
      description: "正在本地解码图片并准备胶片索引预览。",
    },
  };

  function setFilmStageState(nextState) {
    const next = filmStageStates[nextState];
    if (!filmStage || !next) return;
    filmStage.dataset.filmState = nextState;
    filmTitle.textContent = next.title;
    filmDescription.textContent = next.description;
  }

  function hasFileDrag(event) {
    return Array.from(event.dataTransfer?.types || []).includes("Files");
  }

  // ---- 文件导入事件绑定 ----

  fileInput.addEventListener("change", async (event) => {
    const insertBeforeId = fileInput.getAttribute("data-insert-before");
    fileInput.removeAttribute("data-insert-before");

    const files = Array.from(event.target.files || []);
    if (!files.length) {
      fileInput.value = "";
      return;
    }

    await loadFiles(files, insertBeforeId ? Number(insertBeforeId) : null);
    fileInput.value = "";
  });

  let fileDragDepth = 0;

  dropZone.addEventListener("dragenter", (event) => {
    event.preventDefault();
    if (!hasFileDrag(event)) return;
    fileDragDepth += 1;
    dropZone.classList.add("is-dragging");
    if (!state.items.length) setFilmStageState("dragging");
  });

  dropZone.addEventListener("dragover", (event) => {
    event.preventDefault();
    if (!hasFileDrag(event)) return;
    dropZone.classList.add("is-dragging");
    if (!state.items.length) setFilmStageState("dragging");
  });

  dropZone.addEventListener("dragleave", (event) => {
    event.preventDefault();
    if (!hasFileDrag(event)) return;
    fileDragDepth = Math.max(0, fileDragDepth - 1);
    if (fileDragDepth) return;
    dropZone.classList.remove("is-dragging");
    if (!state.items.length) setFilmStageState("intro");
  });

  dropZone.addEventListener("drop", (event) => {
    event.preventDefault();
    fileDragDepth = 0;
    dropZone.classList.remove("is-dragging");
    const files = Array.from(event.dataTransfer.files || []);
    loadFiles(files);
  });

  // 防止文件被拖到 dropZone 之外时浏览器直接打开图片、丢掉当前页面
  ["dragover", "drop"].forEach((eventName) => {
    document.addEventListener(eventName, (event) => {
      event.preventDefault();
      if (eventName !== "drop") return;
      fileDragDepth = 0;
      dropZone.classList.remove("is-dragging");
      if (!state.items.length && !previewWrap.classList.contains("is-loading")) {
        setFilmStageState("intro");
      }
    });
  });

  const sortControls = Array.from(document.querySelectorAll("input[name='sortMode']"));
  const sortModeIndexes = { name: 0, time: 1, custom: 2 };

  function setSortMode(mode) {
    const nextMode = sortModeIndexes[mode] === undefined ? "name" : mode;
    state.sortMode = nextMode;
    const selected = sortControls.find((input) => input.value === nextMode);
    if (selected) selected.checked = true;
    if (sortSegmented) {
      sortSegmented.style.setProperty("--segment-index", String(sortModeIndexes[nextMode]));
    }
  }

  setSortMode(state.sortMode);

  sortControls.forEach((control) => {
    control.addEventListener("change", async (event) => {
      const nextMode = event.currentTarget.value;
      const previousMode = state.sortMode;
      if (nextMode === "time") {
        const requestGeneration = ++state.sortRequestGeneration;
        setSortMode(previousMode);
        sortControls.forEach((input) => { input.disabled = true; });
        const failures = await ensureAllOriginals([...state.items], "按拍摄时间排序");
        if (requestGeneration !== state.sortRequestGeneration) return;
        sortControls.forEach((input) => { input.disabled = false; });
        if (failures.length) {
          setSortMode(previousMode);
          showNotice(`无法读取 ${failures.length} 张原图，已保留原排序`);
          render();
          renderPhotoList();
          return;
        }
        setSortMode("time");
      } else {
        state.sortRequestGeneration += 1;
        sortControls.forEach((input) => { input.disabled = false; });
        setSortMode(nextMode);
      }
      scheduleRender();
      renderPhotoList();
      updateBackgroundControls();
    });
  });

  reverseSort.addEventListener("change", () => {
    scheduleRender();
    renderPhotoList();
    updateBackgroundControls();
  });

  [
    showEdgeText,
    showSprockets,
    imageInSprockets,
    imageInEdgeText,
    showLeader,
    leaderDirectionSelect,
    backgroundStyle,
    backgroundBlur,
    columnsSelect,
    frameWidthInput,
    formatSelect,
    jpgQuality,
  ].forEach((control) => {
    control.addEventListener("input", scheduleRender);
    control.addEventListener("change", scheduleRender);
  });

  columnsSelect.addEventListener("change", () => {
    if (columnsSelect.disabled || is120Format() || is135WideFormat() || isCroppedHalfFrameMode()) return;
    if (isHalfFrameMode()) {
      state.manualHalfColumns = Math.max(4, Number(columnsSelect.value) || 6);
    } else {
      state.manual135Columns = Number(columnsSelect.value) || 6;
    }
  });

  frameAspect.addEventListener("change", handleFrameModeChange);
  wideSpecSelect.addEventListener("change", handleFrameModeChange);
  halfFrameModeInputs.forEach((control) => {
    control.addEventListener("change", handleFrameModeChange);
  });

  function updateExportFormatControls() {
    const fullResolution = exportScale.value === "full";
    if (fullResolution) formatSelect.value = "image/png";
    formatSelect.disabled = fullResolution;
    qualityField.style.display = !fullResolution && formatSelect.value === "image/jpeg" ? "grid" : "none";

    // 页面比例联动控件显隐：横向输出仅「单张A4」，导出方式与 PDF 仅「真实底片尺寸」
    // （120 画幅在 a4-real 下回退普通布局，分页/合并与 PDF 均无意义，一并隐藏）
    const presetValue = exportPagePreset.value;
    const a4RealActive = presetValue === "a4-real" && !is120Format();
    a4SingleLandscapeField.hidden = presetValue !== "a4-single";
    a4RealMergeField.hidden = !a4RealActive;
    a4RealPdfDpiField.hidden = !a4RealActive;
    exportModalPdf.hidden = !a4RealActive;

    // 导出模态框打开时实时更新内存警告
    if (!exportModal.hidden) {
      updateExportMemoryWarning();
    }
  }

  function updateExportMemoryWarning() {
    const items = getSortedItems();
    if (!items.length) { exportMemoryWarning.textContent = ""; return; }
    const isFullResolution = exportScale.value === "full";
    const scale = isFullResolution
      ? getFullResolutionScale(items)
      : clamp(Number(exportScale.value) || 1, 1, 3);
    if (!Number.isFinite(scale) || scale <= 0) { exportMemoryWarning.textContent = ""; return; }
    const exportLayout = getExportRenderLayout(items.length, scale);
    const { options, pageLayout: layout } = exportLayout;
    const estimatedPixelBytes = layout.canvasW * layout.canvasH * 4;
    const estimatedPeakBytes = estimatedPixelBytes * 2;
    const estimatedPeakMB = Math.round(estimatedPeakBytes / 1024 / 1024);
    const memoryWarningThreshold = 500 * 1024 * 1024;
    const preset = exportPagePreset.value;
    const paperName = "A4";
    const orientation = preset.endsWith("-landscape") ? "横向" : "竖向";
    if (estimatedPeakBytes > memoryWarningThreshold) {
      exportMemoryWarning.textContent = `⚠ 导出约需 ${estimatedPeakMB}MB 内存，老旧设备可能闪退，建议降低导出质量或减少照片`;
    } else if (preset === "a4-single") {
      exportMemoryWarning.textContent = `单张A4 · 自适应每行张数与照片尺寸 · ${layout.canvasW.toLocaleString()} × ${layout.canvasH.toLocaleString()} px`;
    } else if (preset === "a4-real") {
      if (!options.a4PageW) {
        exportMemoryWarning.textContent = "「A4 竖向（真实底片尺寸）」仅支持 135 家族画幅，当前画幅将按当前比例导出";
      } else {
        const pages = layout.pageRects ? layout.pageRects.length : 1;
        const pxPerMm = options.baseFrameW / FILM_135.standardImageWidthMm;
        const frameWmm = Math.round(options.slotW / pxPerMm);
        const frameHmm = Math.round(options.slotH / pxPerMm);
        const outputLabel = options.a4Merge
          ? `合并成一张 ${layout.canvasW.toLocaleString()} × ${layout.canvasH.toLocaleString()} px`
          : `分页导出 · 每页 ${layout.canvasW.toLocaleString()} × ${options.a4PageH.toLocaleString()} px`;
        exportMemoryWarning.textContent = `A4 × ${pages} 页 · 每页 ${options.columns} 列 · 单帧 ${frameWmm} × ${frameHmm} mm · ${outputLabel}`;
      }
    } else if (preset !== "free") {
      exportMemoryWarning.textContent = `${paperName} ${orientation}比例 · 自动每行 ${options.columns} 张 · ${layout.canvasW.toLocaleString()} × ${layout.canvasH.toLocaleString()} px`;
    } else {
      exportMemoryWarning.textContent = "";
    }
  }

  function openExportModal() {
    if (state.lightTable.active) exitLightTable({ restoreFocus: false });
    if (state.isExporting) {
      showNotice("请先完成当前导出");
      return;
    }
    updateExportFormatControls();
    updateExportMemoryWarning();
    exportModal.hidden = false;
    document.body.style.overflow = "hidden";
    exportModalClose.focus();
  }

  function closeExportModal() {
    exportModal.hidden = true;
    // 兜底：关闭弹窗时退出三滑块悬浮态，避免下次打开仍处于渐隐状态
    exitInfoBlockPeek();
    document.body.style.overflow = "";
  }

  exportScale.addEventListener("change", updateExportFormatControls);
  exportPagePreset.addEventListener("change", () => {
    // 切换页面比例后同步侧栏控件锁定态，并让主预览立即应用新布局（含 a4-real 分页）
    syncA4RealControls();
    updateExportFormatControls();
    updateExportMemoryWarning();
    scheduleRender();
  });
  // 「单张A4」横向输出勾选：仅影响排版摘要与导出布局选择
  a4SingleLandscape.addEventListener("change", () => {
    updateExportMemoryWarning();
    scheduleRender();
  });
  // A4 真实尺寸导出方式：合并（无缝长图）/ 分页会改变 pageGap，预览需同步更新
  a4RealMergeMode.addEventListener("change", () => {
    updateExportMemoryWarning();
    scheduleRender();
  });
  exportModalPdf.addEventListener("click", () => {
    if (!state.items.length) return;
    if (state.isExporting) {
      if (state.exportHydrationItems) {
        state.exportCancelled = true;
        cancelOriginalDownloads(state.exportHydrationItems);
      } else {
        state.exportCancelled = true;
        exportModalPdf.disabled = true;
      }
      return;
    }
    exportIndexPdf();
  });
  formatSelect.addEventListener("change", updateExportFormatControls);

  // 索引信息区块控件
  showInfoBlockInput.addEventListener("change", () => {
    infoBlockFields.hidden = !showInfoBlockInput.checked;
    scheduleRender();
  });
  [infoBlockFontSelect, infoBlockOpacityInput, infoBlockBlurInput, infoBlockRadiusInput, infoBlockFeatherInput, infoBlockTemplateSelect, infoBlockBgSelect, infoBlockCanisterSideSelect].forEach((control) => {
    control.addEventListener("input", scheduleRender);
    control.addEventListener("change", scheduleRender);
  });

  // ── 三滑块悬浮（peek）──
  // 点按 / 拖动任一滑块时，弹窗外壳（暗色遮罩 + 其余配置项）渐隐，只留这三个滑块组成的卡片
  // 浮在预览之上，便于边拖动边观察信息区块变化；松开后**保持悬浮**，点弹窗空白 / Esc / 「完成」退出。
  function updateInfoBlockRangeOutputs() {
    if (infoBlockOpacityValue) infoBlockOpacityValue.textContent = `${infoBlockOpacityInput.value}%`;
    if (infoBlockBlurValue) infoBlockBlurValue.textContent = `${infoBlockBlurInput.value}px`;
    if (infoBlockRadiusValue) infoBlockRadiusValue.textContent = `${infoBlockRadiusInput.value}%`;
  }
  updateInfoBlockRangeOutputs();

  const exportBackdrop = exportModal.querySelector(".frame-export-backdrop");
  const exportContainer = exportModal.querySelector(".frame-export-container");

  // GSAP 的开窗动画会给遮罩 / 容器写内联样式，进入悬浮前必须清掉，否则：
  //   1) 内联 opacity:1 盖过 CSS 的 opacity:0 → 暗色模糊遮罩残留，主页无法变清晰；
  //   2) 内联 transform 会让容器成为 fixed 后代的包含块（旧实现把滑块改成 fixed 正是因此被裁剪，
  //      表现为「只渲染出单个滑块」「界面异常」）。
  function clearModalAnimationInlineStyles() {
    if (window.gsap && typeof window.gsap.killTweensOf === "function") {
      window.gsap.killTweensOf([exportBackdrop, exportContainer]);
    }
    if (exportBackdrop) exportBackdrop.style.opacity = "";
    if (exportContainer) {
      exportContainer.style.opacity = "";
      exportContainer.style.transform = "";
    }
  }

  function enterInfoBlockPeek() {
    if (exportModal.hidden) return;
    if (exportModal.classList.contains("export-peek")) return;
    clearModalAnimationInlineStyles();
    exportModal.classList.add("export-peek");
  }

  function exitInfoBlockPeek() {
    if (!exportModal.classList.contains("export-peek")) return;
    exportModal.classList.remove("export-peek");
    setActiveRangeOption(null);
  }

  // 当前正在调整的选项：高亮对应滑块行，并在卡片头部显示「选项名 · 即时数值」
  const RANGE_OPTION_META = [
    { input: infoBlockOpacityInput, label: "区块不透明度", unit: "%" },
    { input: infoBlockBlurInput, label: "区块模糊", unit: "px" },
    { input: infoBlockRadiusInput, label: "框圆角", unit: "%" },
  ];
  const infoBlockActiveValue = document.getElementById("infoBlockActiveValue");
  function setActiveRangeOption(control) {
    const meta = RANGE_OPTION_META.find((item) => item.input === control);
    if (infoBlockActiveValue) {
      infoBlockActiveValue.textContent = meta ? `${meta.label} · ${control.value}${meta.unit}` : "";
    }
    RANGE_OPTION_META.forEach((item) => {
      const row = typeof item.input.closest === "function"
        ? item.input.closest(".info-block-range-field")
        : null;
      if (row) row.classList.toggle("is-active", item.input === control);
    });
  }

  RANGE_OPTION_META.forEach(({ input }) => {
    // pointerdown / focus：点击即打开悬浮并保持，拖动从第一帧起就能看到预览同步变化
    input.addEventListener("pointerdown", enterInfoBlockPeek);
    input.addEventListener("focus", enterInfoBlockPeek);
    input.addEventListener("input", () => {
      updateInfoBlockRangeOutputs();
      enterInfoBlockPeek();
      setActiveRangeOption(input);
    });
    // 松开不清悬浮（保持消失状态），只撤掉「正在调整」高亮
    input.addEventListener("change", () => {
      updateInfoBlockRangeOutputs();
      setActiveRangeOption(null);
    });
  });

  const infoBlockPeekDone = document.getElementById("infoBlockPeekDone");
  if (infoBlockPeekDone) infoBlockPeekDone.addEventListener("click", exitInfoBlockPeek);

  // 字段占比弹窗：滑块实时写回权重、预览条同步、主画布联动刷新
  const PROP_CONTROLS = [
    { input: document.getElementById("propFilm"), output: document.getElementById("propFilmValue"), index: 0 },
    { input: document.getElementById("propDate"), output: document.getElementById("propDateValue"), index: 1 },
    { input: document.getElementById("propCamera"), output: document.getElementById("propCameraValue"), index: 2 },
    { input: document.getElementById("propRemarks"), output: document.getElementById("propRemarksValue"), index: 3 },
  ];
  const PROP_LABELS = ["FILM", "DATE", "CAMERA/LENS", "REMARKS"];

  function syncProportionPreview() {
    if (!infoBlockProportionPreview) return;
    const total = infoBlockWeights.reduce((sum, weight) => sum + weight, 0);
    infoBlockProportionPreview.innerHTML = "";
    infoBlockWeights.forEach((weight, index) => {
      const seg = document.createElement("div");
      seg.className = "proportion-seg";
      seg.style.width = `${((weight / total) * 100).toFixed(2)}%`;
      const span = document.createElement("span");
      span.textContent = PROP_LABELS[index];
      seg.appendChild(span);
      infoBlockProportionPreview.appendChild(seg);
    });
  }

  function syncProportionControls() {
    PROP_CONTROLS.forEach(({ input, output, index }) => {
      input.value = String(infoBlockWeights[index]);
      output.textContent = infoBlockWeights[index].toFixed(2);
    });
    syncProportionPreview();
  }

  PROP_CONTROLS.forEach(({ input, output, index }) => {
    input.addEventListener("input", () => {
      infoBlockWeights[index] = clamp(Number(input.value) || 1, 0.3, 2.5);
      output.textContent = infoBlockWeights[index].toFixed(2);
      saveInfoBlockWeights();
      syncProportionPreview();
      scheduleRender();
    });
  });

  function closeProportionModal() {
    if (infoBlockProportionModal) infoBlockProportionModal.hidden = true;
  }

  if (infoBlockProportionButton) {
    infoBlockProportionButton.addEventListener("click", () => {
      syncProportionControls();
      if (infoBlockProportionModal) infoBlockProportionModal.hidden = false;
    });
  }
  const proportionClose = document.getElementById("infoBlockProportionClose");
  const proportionDone = document.getElementById("infoBlockProportionDone");
  const proportionReset = document.getElementById("infoBlockProportionReset");
  if (proportionClose) proportionClose.addEventListener("click", closeProportionModal);
  if (proportionDone) proportionDone.addEventListener("click", closeProportionModal);
  if (proportionReset) {
    proportionReset.addEventListener("click", () => {
      infoBlockWeights = INFO_BLOCK_DEFAULT_WEIGHTS.slice();
      saveInfoBlockWeights();
      syncProportionControls();
      scheduleRender();
    });
  }

  // 暗盒尺寸：并入照片操作菜单（#frameMenu）的「暗盒」操作组，滑块 50%–300%。
  // 提醒只在「暗盒高度与字段框（FILM / DATE 等）上下框线精确相等」的那一个值触发：
  // 滑块步进 1%，最靠近临界值的那个整数百分比会被磁吸为精确等宽值（见 setCanisterScaleFromPercent），
  // 其余位置不吸附、不提醒——消除提前触发与区间误触发。
  // 等宽临界值超出 50%–300% 量程的图片（如过扁的全景扫描图）无法精确等宽，
  // 拖到量程边界时会得到「需约百分之XX」的解释性提醒，而不是始终沉默。
  const canisterMenuValue = document.getElementById("canisterMenuValue");
  const canisterMenuScale = document.getElementById("canisterMenuScale");
  // 缩放百分比文案：精确值（最多两位小数，去除浮点噪声与无效零，如 237.24 / 137 / 100）
  function formatCanisterPercent(scale) {
    return String(parseFloat((scale * 100).toFixed(2)));
  }
  function syncCanisterScaleControls() {
    if (canisterMenuScale) canisterMenuScale.value = String(parseFloat((infoBlockCanisterScale * 100).toFixed(4)));
    if (canisterMenuValue) canisterMenuValue.textContent = `${formatCanisterPercent(infoBlockCanisterScale)}%`;
  }
  // 该尺寸下暗盒高度是否与字段框上下框线「精确相等」（无容差；仅浮点噪声以内视为相等）
  function isCanisterExactMatch(scale) {
    const geom = state.infoBlockCanisterGeom;
    if (!geom || !geom.innerH || !geom.fitH) return false;
    return Math.abs(geom.fitH * scale - geom.innerH) <= Math.max(1e-6, geom.innerH * 1e-9);
  }
  let canisterSnapReminded = false;
  let canisterRangeReminded = false;
  function setCanisterScaleFromPercent(percent) {
    let next = clamp(Number(percent) || 100, CANISTER_SCALE_MIN * 100, CANISTER_SCALE_MAX * 100) / 100;
    const geom = state.infoBlockCanisterGeom;
    // 磁吸：滑块步进 1%（一步在高度上对应 fitH * 0.01），只有落在临界值 ± 半步
    // （高度差 ≤ fitH * 0.005）内的那个整数百分比会被吸附为精确等宽值 innerH / fitH。
    // 数学上任何临界值都必有一个整数百分比落在其 ±0.5% 内，因此量程内的精确匹配永远可达；
    // 其余位置一律保持原值，不做区间吸附。
    // 临界值超出量程时（如过扁的全景暗盒图 crit > 300%），磁吸永远无法命中——
    // 此时在到达对应量程边界的那一刻给出解释性提醒，而不是始终沉默。
    let outOfRangeCrit = 0;
    if (geom && geom.fitH > 0 && geom.innerH > 0) {
      const critScale = geom.innerH / geom.fitH;
      if (Math.abs(geom.fitH * next - geom.innerH) <= geom.fitH * 0.005) {
        next = critScale;
      } else if (critScale > CANISTER_SCALE_MAX && next >= CANISTER_SCALE_MAX - 1e-9) {
        outOfRangeCrit = critScale;
      } else if (critScale < CANISTER_SCALE_MIN && next <= CANISTER_SCALE_MIN + 1e-9) {
        outOfRangeCrit = critScale;
      }
    }
    infoBlockCanisterScale = next;
    if (canisterMenuValue) canisterMenuValue.textContent = `${formatCanisterPercent(next)}%`;
    if (canisterMenuScale) canisterMenuScale.value = String(parseFloat((next * 100).toFixed(4)));
    scheduleRender();
    // 暗盒上下边缘与 FILM / DATE 框线精确相等时提醒（同一次拖动只提醒一次）
    if (isCanisterExactMatch(next)) {
      if (!canisterSnapReminded) {
        showNotice(`暗盒尺寸已与框线等宽，此时为百分之${formatCanisterPercent(next)}`, 3200);
        canisterSnapReminded = true;
      }
    } else {
      canisterSnapReminded = false;
    }
    // 等宽点在量程之外：到达上限 / 下限的那一刻明确告知所需的准确百分比
    if (outOfRangeCrit) {
      if (!canisterRangeReminded) {
        const tooWide = outOfRangeCrit > CANISTER_SCALE_MAX;
        const limit = tooWide ? CANISTER_SCALE_MAX : CANISTER_SCALE_MIN;
        showNotice(
          `该暗盒图片${tooWide ? "过于扁宽" : "过于高瘦"}，即使${tooWide ? "放大" : "缩小"}到 ${formatCanisterPercent(limit)}% 高度也无法与框线等宽（需约百分之${formatCanisterPercent(outOfRangeCrit)}）`,
          4200,
        );
        canisterRangeReminded = true;
      }
    } else {
      canisterRangeReminded = false;
    }
  }
  function resetCanisterScale() {
    infoBlockCanisterScale = 1;
    saveInfoBlockCanisterScale();
    syncCanisterScaleControls();
    scheduleRender();
  }
  if (canisterMenuScale) {
    canisterMenuScale.addEventListener("input", () => setCanisterScaleFromPercent(canisterMenuScale.value));
    canisterMenuScale.addEventListener("change", () => {
      saveInfoBlockCanisterScale();
      canisterSnapReminded = false; // 每次拖动只提醒一次
      canisterRangeReminded = false;
    });
  }
  fillTickDatalist(document.getElementById("canisterMenuTicks"), 50, 300, 5);
  syncCanisterScaleControls();
  infoBlockImageInput.addEventListener("change", async () => {
    const file = infoBlockImageInput.files && infoBlockImageInput.files[0];
    if (!file) return;
    try {
      const bitmap = await createImageBitmap(file);
      if (infoBlockCanisterImage && typeof infoBlockCanisterImage.close === "function") {
        infoBlockCanisterImage.close();
      }
      infoBlockCanisterImage = bitmap;
      infoBlockImageClear.hidden = false;
      // 新图新几何：等宽临界值随之变化，提醒资格重新计算
      canisterSnapReminded = false;
      canisterRangeReminded = false;
      showNotice(`暗盒图片已添加到信息区块${infoBlockCanisterSideSelect && infoBlockCanisterSideSelect.value === "left" ? "左" : "右"}侧`);
    } catch (error) {
      console.error("暗盒图片读取失败", error);
      showNotice("暗盒图片读取失败，请更换图片后重试");
    }
    infoBlockImageInput.value = "";
    scheduleRender();
  });
  infoBlockImageClear.addEventListener("click", () => {
    if (infoBlockCanisterImage && typeof infoBlockCanisterImage.close === "function") {
      infoBlockCanisterImage.close();
    }
    infoBlockCanisterImage = null;
    infoBlockImageClear.hidden = true;
    canisterSnapReminded = false;
    canisterRangeReminded = false;
    scheduleRender();
  });

  // 滑块 1% 一档刻度（datalist 驱动浏览器渲染刻度线）
  function fillTickDatalist(datalist, from, to, step = 1) {
    if (!datalist) return;
    for (let value = from; value <= to; value += step) {
      const option = document.createElement("option");
      option.value = String(value);
      datalist.appendChild(option);
    }
  }
  fillTickDatalist(document.getElementById("infoBlockOpacityTicks"), 10, 100);
  fillTickDatalist(document.getElementById("infoBlockBlurTicks"), 0, 40);
  fillTickDatalist(document.getElementById("infoBlockRadiusTicks"), 0, 100);

  zoomRange.addEventListener("input", () => {
    setPreviewZoom(Number(zoomRange.value) / 100);
  });

  zoomOut.addEventListener("click", () => {
    setPreviewZoom(clamp(state.previewZoom - 0.1, 0.25, 2));
  });

  zoomIn.addEventListener("click", () => {
    setPreviewZoom(clamp(state.previewZoom + 0.1, 0.25, 2));
  });

  zoomFit.addEventListener("click", fitPreviewToViewport);

  lightTableButton.addEventListener("click", toggleLightTable);
  lightTableExit.addEventListener("click", () => exitLightTable());
  previewWrap.addEventListener("wheel", onLoupeWheel, { passive: false });
  // 双击循环倍率档位（1x→4x→8x→16x→1x）；修饰键双击属于选帧操作，不参与
  previewWrap.addEventListener("dblclick", (event) => {
    if (!state.lightTable.active || event.ctrlKey || event.metaKey || event.shiftKey) return;
    event.preventDefault();
    cycleLoupePreset();
  });
  previewWrap.addEventListener("pointermove", onLightTableSurfacePointerMove);
  previewWrap.addEventListener("pointerleave", onLightTableSurfacePointerLeave);

  function hasOpenModal() {
    return (
      !exportModal.hidden ||
      !frameExportModal.hidden ||
      !cropModal.hidden ||
      Boolean(BaiduPanIntegration?.browserModal && !BaiduPanIntegration.browserModal.hidden)
    );
  }

  function syncLightTableControls() {
    lightTableButton.disabled = !state.items.length || state.isExporting;
    lightTableButton.setAttribute("aria-pressed", String(state.lightTable.active));
  }

  function setLightTableStatus(message) {
    if (lightTableStatus.textContent !== message) lightTableStatus.textContent = message;
    // 仅默认提示参与自动淡出；水合等过程性消息常驻
    if (message === currentLightTableHint()) restartHudIdleFade();
    else cancelHudIdleFade();
  }

  function currentLightTableHint() {
    return matchMedia("(hover: hover) and (pointer: fine)").matches
      ? "滚轮变倍 · 单击聚焦 · Ctrl+点击选帧 · 1-4 档位 · J/K 过片 · +/- 灯箱"
      : "拖动平移 · 点按聚焦 · 长按照片选帧";
  }

  function restartHudIdleFade() {
    cancelHudIdleFade();
    state.lightTable.hudStatusTimer = window.setTimeout(() => {
      state.lightTable.hudStatusTimer = 0;
      document.body.classList.add("hud-idle");
    }, HUD_IDLE_FADE_MS);
  }

  function cancelHudIdleFade() {
    if (state.lightTable.hudStatusTimer) {
      clearTimeout(state.lightTable.hudStatusTimer);
      state.lightTable.hudStatusTimer = 0;
    }
    document.body.classList.remove("hud-idle");
  }

  function canEnterLightTable() {
    if (!state.items.length) return false;
    if (state.isExporting || hasOpenModal()) {
      showNotice("请先完成当前操作，再进入观片台");
      return false;
    }
    return true;
  }

  function afterLightTableLayout(callback) {
    requestAnimationFrame(() => requestAnimationFrame(callback));
  }

  function resizeLoupe() {
    const diameter = Math.max(1, opticalLoupe.getBoundingClientRect().width || 236);
    loupeRenderer.resize(diameter, Math.min(window.devicePixelRatio || 1, 2));
  }

  function previewViewportCenter() {
    const rect = previewWrap.getBoundingClientRect();
    return {
      clientX: rect.left + rect.width / 2,
      clientY: rect.top + rect.height / 2,
    };
  }

  function captureCanvasAnchor(sourceClient, targetClient = sourceClient) {
    if (!sourceClient || !targetClient || !previewCanvas.width || !previewCanvas.height) return null;
    const rect = previewCanvas.getBoundingClientRect();
    if (!rect.width || !rect.height) return null;
    const point = canvasPoint(sourceClient, rect);
    if (![point.x, point.y, targetClient.clientX, targetClient.clientY].every(Number.isFinite)) return null;
    return {
      x: point.x,
      y: point.y,
      clientX: targetClient.clientX,
      clientY: targetClient.clientY,
    };
  }

  function anchorFromSamplePoint(point, targetClient) {
    if (!point || !targetClient) return null;
    if (![point.x, point.y, targetClient.clientX, targetClient.clientY].every(Number.isFinite)) return null;
    return {
      x: point.x,
      y: point.y,
      clientX: targetClient.clientX,
      clientY: targetClient.clientY,
    };
  }

  function restoreCanvasAnchor(anchor) {
    if (!anchor || !previewCanvas.width || !previewCanvas.height) return false;
    void previewWrap.clientWidth;
    const rect = previewCanvas.getBoundingClientRect();
    if (!rect.width || !rect.height) return false;
    const displayedX = rect.left + anchor.x * rect.width / previewCanvas.width;
    const displayedY = rect.top + anchor.y * rect.height / previewCanvas.height;
    const nextScrollLeft = previewWrap.scrollLeft + displayedX - anchor.clientX;
    const nextScrollTop = previewWrap.scrollTop + displayedY - anchor.clientY;
    if (![nextScrollLeft, nextScrollTop].every(Number.isFinite)) return false;
    previewWrap.scrollLeft = clamp(nextScrollLeft, 0, Math.max(0, previewWrap.scrollWidth - previewWrap.clientWidth));
    previewWrap.scrollTop = clamp(nextScrollTop, 0, Math.max(0, previewWrap.scrollHeight - previewWrap.clientHeight));
    return true;
  }

  function currentLightTableAnchor() {
    const target = state.lightTable.focusMode ? loupeViewportCenter() : (state.lightTable.pointer || previewViewportCenter());
    return anchorFromSamplePoint(state.lightTable.samplePoint, target) || captureCanvasAnchor(target, target);
  }

  function fitLightTableToViewport(anchor = null) {
    if (!state.lightTable.active || !previewCanvas.width || !previewCanvas.height) return;
    const styles = getComputedStyle(previewWrap);
    const availableWidth = Math.max(1, previewWrap.clientWidth - parseFloat(styles.paddingLeft) - parseFloat(styles.paddingRight));
    const availableHeight = Math.max(1, previewWrap.clientHeight - parseFloat(styles.paddingTop) - parseFloat(styles.paddingBottom));
    setPreviewZoom(Math.min(availableWidth / previewCanvas.width, availableHeight / previewCanvas.height, 2), 0.05, false);
    if (restoreCanvasAnchor(anchor)) return;
    previewWrap.scrollLeft = Math.max(0, (previewWrap.scrollWidth - previewWrap.clientWidth) / 2);
    previewWrap.scrollTop = Math.max(0, (previewWrap.scrollHeight - previewWrap.clientHeight) / 2);
  }

  function enterLightTable() {
    if (state.lightTable.active || !canEnterLightTable()) return;
    hideFrameMenu();
    cancelCanvasDrag();
    const transitionId = ++state.lightTable.transitionId;
    const center = previewViewportCenter();
    const anchor = captureCanvasAnchor(center, loupeViewportCenter());
    state.lightTable.session = {
      previewZoom: state.previewZoom,
      activeElement: document.activeElement,
    };
    state.lightTable.active = true;
    state.lightTable.pointer = null;
    state.lightTable.focusMode = false;
    state.lightTable.focusPan = null;
    state.lightTable.sortedItems = getSortedItems();
    document.body.classList.add("is-light-table");
    document.body.classList.remove("is-loupe-focus");
    lightTableHud.hidden = false;
    opticalLoupe.hidden = false;
    applyLightboxBrightness();
    restartHudIdleFade();
    syncLightTableControls();
    render();
    afterLightTableLayout(() => {
      if (!state.lightTable.active || transitionId !== state.lightTable.transitionId) return;
      resizeLoupe();
      fitLightTableToViewport(anchor);
      lightTableExit.focus();
      updateLoupeReadout();
    });
  }

  function clearFocusMode({ restoreView = true } = {}) {
    if (!state.lightTable.focusMode) return;
    const focusPan = state.lightTable.focusPan;
    const center = loupeViewportCenter();
    const target = state.lightTable.pointer || center;
    const anchor = restoreView
      ? (anchorFromSamplePoint(state.lightTable.samplePoint, target) || captureCanvasAnchor(center, target))
      : null;
    state.lightTable.focusMode = false;
    state.lightTable.focusPan = null;
    document.body.classList.remove("is-loupe-focus");
    if (document.pointerLockElement === previewCanvas) document.exitPointerLock();
    if (restoreView && Number.isFinite(focusPan?.previewZoom)) {
      setPreviewZoom(focusPan.previewZoom, 0.05, false);
    }
    if (restoreView) restoreCanvasAnchor(anchor);
    resizeLoupe();
  }

  function onLightTablePointerLockChange() {
    const ownsLock = document.pointerLockElement === previewCanvas;
    if (ownsLock) {
      state.lightTable.pointerLockOwned = true;
      if (!state.lightTable.active || !state.lightTable.focusMode) document.exitPointerLock();
      return;
    }

    const lostOwnedLock = state.lightTable.pointerLockOwned;
    state.lightTable.pointerLockOwned = false;
    if (lostOwnedLock && state.lightTable.active && state.lightTable.focusMode) exitFocusMode();
  }

  function onLightTablePointerLockError() {
    state.lightTable.pointerLockOwned = false;
  }

  document.addEventListener("pointerlockchange", onLightTablePointerLockChange);
  document.addEventListener("pointerlockerror", onLightTablePointerLockError);

  function exitFocusMode({ restoreView = true } = {}) {
    clearFocusMode({ restoreView });
    updateLoupeReadout();
    scheduleLoupeFrame();
  }

  function enterFocusMode(pointer) {
    if (state.lightTable.focusMode) return;
    const source = pointer || state.lightTable.pointer || loupeViewportCenter();
    const center = loupeViewportCenter();
    const anchor = captureCanvasAnchor(source, center);
    state.lightTable.focusPan = {
      previewZoom: state.previewZoom,
      lastClientX: pointer?.clientX ?? null,
      lastClientY: pointer?.clientY ?? null,
    };
    state.lightTable.focusMode = true;
    state.lightTable.pointer = source;
    document.body.classList.add("is-loupe-focus");
    if (pointer && previewCanvas.requestPointerLock) {
      try {
        const lockResult = previewCanvas.requestPointerLock();
        if (lockResult?.catch) lockResult.catch(() => {});
      } catch {}
    }

    // 聚焦时让索引略大于视口，使鼠标移动能在固定镜片下平移背景。
    const styles = getComputedStyle(previewWrap);
    const availableWidth = Math.max(1, previewWrap.clientWidth - parseFloat(styles.paddingLeft) - parseFloat(styles.paddingRight));
    const availableHeight = Math.max(1, previewWrap.clientHeight - parseFloat(styles.paddingTop) - parseFloat(styles.paddingBottom));
    const focusZoom = Math.min(2, Math.max(
      state.previewZoom * 1.55,
      availableWidth * 1.18 / previewCanvas.width,
      availableHeight * 1.18 / previewCanvas.height,
    ));
    setPreviewZoom(focusZoom, 0.05, false);
    restoreCanvasAnchor(anchor);
    resizeLoupe();
    updateLoupeReadout();
    scheduleLoupeFrame();
  }

  function toggleFocusMode(pointer) {
    if (state.lightTable.focusMode) exitFocusMode();
    else enterFocusMode(pointer);
  }

  function panFocusedBackground(event) {
    if (!state.lightTable.focusMode || !state.lightTable.focusPan) return;
    const focusPan = state.lightTable.focusPan;
    const fallbackX = focusPan.lastClientX == null ? 0 : event.clientX - focusPan.lastClientX;
    const fallbackY = focusPan.lastClientY == null ? 0 : event.clientY - focusPan.lastClientY;
    const dx = Number.isFinite(event.movementX) ? event.movementX : fallbackX;
    const dy = Number.isFinite(event.movementY) ? event.movementY : fallbackY;
    focusPan.lastClientX = event.clientX;
    focusPan.lastClientY = event.clientY;

    // 相对位移灵敏度随倍率平方根反比衰减：倍率越高，背景移动越慢，便于精细观察。
    const sensitivity = clamp(1.6 / Math.sqrt(state.lightTable.magnification), 0.16, 1.2);
    previewWrap.scrollLeft += dx * sensitivity;
    previewWrap.scrollTop += dy * sensitivity;
  }

  function clearLoupeInteraction() {
    if (state.lightTable.rafId) cancelAnimationFrame(state.lightTable.rafId);
    if (state.lightTable.resizeRafId) cancelAnimationFrame(state.lightTable.resizeRafId);
    clearTimeout(state.lightTable.hydrationTimer);
    cancelHudIdleFade();
    state.lightTable.rafId = 0;
    state.lightTable.resizeRafId = 0;
    state.lightTable.hydrationTimer = 0;
    state.lightTable.hydrationRequestId += 1;
    state.lightTable.pointer = null;
    state.lightTable.activeItemId = null;
    state.lightTable.samplePoint = null;
    state.lightTable.focusMode = false;
    state.lightTable.focusPan = null;
    state.lightTable.pinch = null;
    state.lightTable.frameTagKey = "";
    state.lightTable.pointerLockOwned = false;
    if (document.pointerLockElement === previewCanvas) document.exitPointerLock();
    state.lightTable.sortedItems = null;
    document.body.classList.remove("is-loupe-focus");
    hideLoupe();
  }

  function exitLightTable({ restoreFocus = true } = {}) {
    if (!state.lightTable.active) return;
    const session = state.lightTable.session;
    const anchor = currentLightTableAnchor();
    ++state.lightTable.transitionId;
    cancelCanvasDrag();
    clearLoupeInteraction();
    state.lightTable.active = false;
    state.lightTable.session = null;
    state.lightTable.brightness = 100;
    previewWrap.style.removeProperty("background-color");
    document.body.classList.remove("is-light-table");
    lightTableHud.hidden = true;
    opticalLoupe.hidden = true;
    syncLightTableControls();
    render();
    if (session) {
      setPreviewZoom(session.previewZoom);
      if (anchor) {
        const center = previewViewportCenter();
        anchor.clientX = center.clientX;
        anchor.clientY = center.clientY;
      }
      restoreCanvasAnchor(anchor);
      if (restoreFocus) {
        const target = session.activeElement?.isConnected ? session.activeElement : lightTableButton;
        target?.focus();
      }
    }
  }

  function toggleLightTable() {
    if (state.lightTable.active) exitLightTable();
    else enterLightTable();
  }

  function updateLoupeReadout() {
    if (loupeMagnificationReadout) {
      loupeMagnificationReadout.textContent = `${state.lightTable.magnification.toFixed(1)}X`;
    }
    const item = state.items.find((entry) => entry.id === state.lightTable.activeItemId);
    if (!item) {
      setLightTableStatus(currentLightTableHint());
    } else if (item.remote?.quality === "loading") {
      setLightTableStatus("正在获取原图…");
    } else if (item.remote && item.remote.quality !== "full") {
      setLightTableStatus("当前显示预览图");
    } else {
      setLightTableStatus(state.lightTable.focusMode ? "聚焦 · 原图采样" : "原图采样");
    }
  }

  function setLoupeMagnification(value) {
    const clamped = clamp(value, LOUPE_MIN_MAGNIFICATION, LOUPE_MAX_MAGNIFICATION);
    if (clamped === state.lightTable.magnification) return;
    state.lightTable.magnification = clamped;
    updateLoupeReadout();
    scheduleLoupeFrame();
  }

  /* ---- 观片台增强：档位 / 灯箱亮度 / 帧步进 / 帧信息浮标 ---- */

  function applyLoupePreset(index) {
    const preset = LOUPE_MAG_PRESETS[clamp(index, 0, LOUPE_MAG_PRESETS.length - 1)];
    setLoupeMagnification(preset);
    setLightTableStatus(`倍率档位 ${preset}X`);
  }

  function cycleLoupePreset() {
    const current = state.lightTable.magnification;
    const next = LOUPE_MAG_PRESETS.find((preset) => preset > current + 0.01) ?? LOUPE_MAG_PRESETS[0];
    applyLoupePreset(LOUPE_MAG_PRESETS.indexOf(next));
  }

  // 灯箱亮度 → 桌面底色（70% 暖暗纸白 ~ 115% 纯白），镜片越界区域取同一颜色
  function lightboxColor() {
    const t = (state.lightTable.brightness - LIGHTBOX_MIN_BRIGHTNESS) / (LIGHTBOX_MAX_BRIGHTNESS - LIGHTBOX_MIN_BRIGHTNESS);
    const mix = (from, to) => Math.round(from + (to - from) * t);
    return `rgb(${mix(233, 255)}, ${mix(226, 255)}, ${mix(210, 252)})`;
  }

  function applyLightboxBrightness() {
    previewWrap.style.backgroundColor = lightboxColor();
  }

  function setLightboxBrightness(value) {
    const clamped = clamp(Math.round(value), LIGHTBOX_MIN_BRIGHTNESS, LIGHTBOX_MAX_BRIGHTNESS);
    if (clamped === state.lightTable.brightness) return;
    state.lightTable.brightness = clamped;
    applyLightboxBrightness();
    setLightTableStatus(`灯箱亮度 ${clamped}%`);
    scheduleLoupeFrame();
  }

  // 帧间步进：把上/下一帧中心滚到镜心之下
  function stepLightTableFrame(delta) {
    const items = state.lightTable.sortedItems || (state.lightTable.sortedItems = getSortedItems());
    if (!items.length || !state.frameRects.length) return;

    const centers = state.frameRects.map((frame) => ({
      id: frame.id,
      x: frame.bounds.x + frame.bounds.w / 2,
      y: frame.bounds.y + frame.bounds.h / 2,
    }));

    let currentIndex = centers.findIndex((center) => center.id === state.lightTable.activeItemId);
    if (currentIndex < 0) {
      const rect = previewCanvas.getBoundingClientRect();
      const fallbackPoint = state.lightTable.samplePoint
        || canvasPoint(loupeViewportCenter(), rect);
      currentIndex = centers.reduce((best, center, index) => {
        const distance = Math.hypot(center.x - fallbackPoint.x, center.y - fallbackPoint.y);
        return distance < centers[best].distance ? { index, distance } : best;
      }, { index: 0, distance: Infinity }).index;
    }

    const nextIndex = clamp(currentIndex + delta, 0, centers.length - 1);
    if (nextIndex === currentIndex) {
      setLightTableStatus(delta < 0 ? "已是第一帧" : "已是最后一帧");
      restartHudIdleFade();
      return;
    }

    const target = centers[nextIndex];
    const canvasRect = previewCanvas.getBoundingClientRect();
    const clientX = canvasRect.left + target.x * canvasRect.width / previewCanvas.width;
    const clientY = canvasRect.top + target.y * canvasRect.height / previewCanvas.height;
    previewWrap.scrollLeft += clientX - window.innerWidth / 2;
    previewWrap.scrollTop += clientY - window.innerHeight / 2;

    // 镜心即屏幕中心：非聚焦模式下也让镜片跳到该帧位置
    state.lightTable.pointer = loupeViewportCenter();
    scheduleLoupeFrame();

    const steppedItem = items.find((entry) => entry.id === target.id);
    if (steppedItem) syncLoupeFrameTag(steppedItem, true);
    setLightTableStatus(`第 ${nextIndex + 1}/${centers.length} 帧 · ${steppedItem?.name ?? ""}`);
  }

  // 镜内帧信息浮标：仅在命中帧变化时写 DOM
  function syncLoupeFrameTag(item, force = false) {
    if (!loupeFrameTag) return;
    if (!item) {
      if (state.lightTable.frameTagKey !== "") {
        state.lightTable.frameTagKey = "";
        loupeFrameTag.hidden = true;
      }
      return;
    }
    const key = `${item.id}:${item.name}`;
    if (!force && key === state.lightTable.frameTagKey) return;
    state.lightTable.frameTagKey = key;
    const items = state.lightTable.sortedItems;
    const order = items ? items.findIndex((entry) => entry.id === item.id) + 1 : 0;
    loupeFrameTag.textContent = order ? `第 ${order} 帧 · ${item.name}` : item.name;
    loupeFrameTag.hidden = false;
  }

  function onLoupeWheel(event) {
    if (!state.lightTable.active) return;
    event.preventDefault();
    restartHudIdleFade();
    // 每 100 单位 deltaY 约 ±12% 倍率，向上滚放大。
    const factor = Math.exp(-event.deltaY * 0.0011);
    setLoupeMagnification(state.lightTable.magnification * factor);
  }

  function onLightTableSurfacePointerMove(event) {
    if (!state.lightTable.active || event.pointerType === "touch" || event.target === previewCanvas) return;
    state.lightTable.pointer = { clientX: event.clientX, clientY: event.clientY };
    if (state.lightTable.focusMode) panFocusedBackground(event);
    scheduleLoupeFrame();
  }

  function onLightTableSurfacePointerLeave(event) {
    if (!state.lightTable.active || state.lightTable.focusMode || event.pointerType === "touch") return;
    resetLoupeTarget();
  }

  function hideLoupe() {
    opticalLoupe.classList.remove("is-visible", "is-hydrating");
    previewWrap.classList.remove("has-optical-loupe");
    state.lightTable.frameTagKey = "";
    if (loupeFrameTag) loupeFrameTag.hidden = true;
    loupeRenderer.clear();
  }

  function scheduleOriginalForLoupe(item) {
    clearTimeout(state.lightTable.hydrationTimer);
    state.lightTable.hydrationTimer = 0;
    if (!item.remote || item.remote.quality === "full") return;
    const requestId = ++state.lightTable.hydrationRequestId;
    const hydrate = async () => {
      if (!state.lightTable.active || state.lightTable.activeItemId !== item.id || requestId !== state.lightTable.hydrationRequestId) return;
      opticalLoupe.classList.add("is-hydrating");
      setLightTableStatus("正在获取原图…");
      try {
        await ensureOriginal(item, "观片器检查");
        if (!state.lightTable.active || state.lightTable.activeItemId !== item.id || requestId !== state.lightTable.hydrationRequestId) return;
        opticalLoupe.classList.remove("is-hydrating");
        setLightTableStatus("原图已就绪");
        scheduleLoupeFrame();
      } catch (error) {
        if (error.name === "AbortError") return;
        if (state.lightTable.active && state.lightTable.activeItemId === item.id) {
          opticalLoupe.classList.remove("is-hydrating");
          setLightTableStatus("原图获取失败，当前显示预览图");
        }
      }
    };
    if (item.remote.quality === "loading") {
      void hydrate();
      return;
    }
    state.lightTable.hydrationTimer = window.setTimeout(hydrate, 120);
  }

  // 把镜片下方的整张索引区域重绘到高分辨率离屏 tile：中心对准 (centerIndexX, centerIndexY)。
  // 采用 scale=1 布局 + 画布缩放变换，保证与预览同一坐标空间、镜片中心精确对准。
  function renderLoupeTile(centerIndexX, centerIndexY) {
    const items = state.lightTable.sortedItems;
    if (!items || !items.length) return null;
    const rect = previewCanvas.getBoundingClientRect();
    if (!rect.width || !previewCanvas.width) return null;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const displayScale = rect.width / previewCanvas.width;
    const G = state.lightTable.magnification * displayScale * dpr;
    if (!Number.isFinite(G) || G <= 0) return null;

    const backing = loupeRenderer.backingSize();
    if (!backing) return null;
    const T = Math.min(1024, Math.max(1, backing));
    let tile = state.lightTable.tileCanvas;
    if (!tile) {
      tile = document.createElement("canvas");
      state.lightTable.tileCanvas = tile;
    }

    const options = getRenderOptions(1);
    const layout = computeLayout(items.length, options);
    const halfIndex = T / (2 * G);
    const cullRect = {
      x: centerIndexX - halfIndex,
      y: centerIndexY - halfIndex,
      width: halfIndex * 2,
      height: halfIndex * 2,
    };

    const prevCanvas = activeCanvas;
    const prevCtx = ctx;
    try {
      tile.width = T;
      tile.height = T;
      const tileCtx = tile.getContext("2d");
      if (!tileCtx) return null;
      activeCanvas = tile;
      ctx = tileCtx;
      tileCtx.setTransform(1, 0, 0, 1, 0, 0);
      // 观片台是无限底板：索引边界外保持当前灯箱亮度色，让镜片可自由越过边缘。
      tileCtx.fillStyle = lightboxColor();
      tileCtx.fillRect(0, 0, T, T);
      tileCtx.setTransform(G, 0, 0, G, T / 2 - centerIndexX * G, T / 2 - centerIndexY * G);
      tileCtx.save();
      tileCtx.beginPath();
      tileCtx.rect(0, 0, layout.canvasW, layout.canvasH);
      tileCtx.clip();
      paintIndex(items, options, layout, { cullRect, buildHitData: false });
      tileCtx.restore();
    } finally {
      activeCanvas = prevCanvas;
      ctx = prevCtx;
    }
    return tile;
  }

  function loupeViewportCenter() {
    return { clientX: window.innerWidth / 2, clientY: window.innerHeight / 2 };
  }

  function drawLoupeFrame() {
    state.lightTable.rafId = 0;
    if (!state.lightTable.active) {
      hideLoupe();
      return;
    }
    const focus = state.lightTable.focusMode;
    const rect = previewCanvas.getBoundingClientRect();
    if (!rect.width || !rect.height) {
      hideLoupe();
      return;
    }

    // 采样中心（client 坐标）与镜片显示位置（client 坐标）
    let sampleClient;
    let lensClient;
    if (focus) {
      sampleClient = loupeViewportCenter();
      lensClient = sampleClient;
    } else {
      const pointer = state.lightTable.pointer;
      if (!pointer || state.canvasDrag?.mode === "light-pan") {
        hideLoupe();
        return;
      }
      sampleClient = pointer;
      lensClient = pointer;
    }

    // canvasPoint 允许返回索引边界外坐标；tile 渲染器会以无限白色底板补齐。
    const point = canvasPoint(sampleClient, rect);
    state.lightTable.samplePoint = point;

    // 命中帧仅用于远程原图按需水合；空白/齿孔/边字区域也照常显示放大内容。
    const hit = hitFrame(point);
    const item = hit?.item || null;
    const previousItemId = state.lightTable.activeItemId;
    state.lightTable.activeItemId = item ? item.id : null;
    if (item && previousItemId !== item.id) scheduleOriginalForLoupe(item);
    syncLoupeFrameTag(item);

    const tile = renderLoupeTile(point.x, point.y);
    const drawn = tile && loupeRenderer.draw({ tile });
    if (!drawn) {
      hideLoupe();
      return;
    }

    opticalLoupe.style.setProperty("--loupe-x", `${lensClient.clientX}px`);
    opticalLoupe.style.setProperty("--loupe-y", `${lensClient.clientY}px`);
    opticalLoupe.classList.add("is-visible");
    previewWrap.classList.add("has-optical-loupe");
    if (item?.remote?.quality === "loading") opticalLoupe.classList.add("is-hydrating");
    else opticalLoupe.classList.remove("is-hydrating");
  }

  function scheduleLoupeFrame() {
    if (!state.lightTable.active) return;
    restartHudIdleFade();
    if (state.lightTable.rafId) return;
    state.lightTable.rafId = requestAnimationFrame(drawLoupeFrame);
  }

  exportButton.addEventListener("click", () => {
    if (!state.items.length) return;
    if (state.isExporting) {
      if (state.exportHydrationItems) {
        state.exportCancelled = true;
        cancelOriginalDownloads(state.exportHydrationItems);
      } else {
        state.exportCancelled = true;
        exportButton.disabled = true;
        exportButton.textContent = "正在取消...";
      }
      return;
    }
    openExportModal();
  });

  frameSelectButton.addEventListener("click", () => {
    if (!state.items.length || state.isExporting) return;
    state.frameSelectionMode = !state.frameSelectionMode;
    syncFrameSelectionControls();
    render();
  });

  clearFrameSelectionButton.addEventListener("click", () => {
    clearFrameSelection();
  });

  batchFrameExportButton.addEventListener("click", () => {
    openBatchFrameExportModal(batchFrameExportButton);
  });

  exportModalClose.addEventListener("click", closeExportModal);
  exportModalCancel.addEventListener("click", closeExportModal);
  exportModal.addEventListener("click", (event) => {
    if (event.target === exportModal || event.target.classList.contains("frame-export-backdrop")) {
      // 悬浮态下点弹窗空白：只退出悬浮（弹窗渐显回来），不整个关闭
      if (exportModal.classList.contains("export-peek")) {
        exitInfoBlockPeek();
        return;
      }
      closeExportModal();
    }
  });
  exportModalConfirm.addEventListener("click", async () => {
    closeExportModal();
    await exportIndexImage();
  });

  clearButton.addEventListener("click", () => {
    if (state.isExporting) {
      showNotice("请先取消当前导出，再清空照片");
      return;
    }
    if (state.lightTable.active) exitLightTable({ restoreFocus: false });
    state.reprocessGeneration += 1;
    state.items.forEach(releaseItem);
    state.items = [];
    state.frameSelectionMode = false;
    clearFrameSelection({ redraw: false });
    normalizeBackgroundSelection();
    updateBackgroundControls();
    render();
    renderPhotoList();
  });

  // ---- 画布交互：背景拖拽平移，帧拖拽调序 ----

  previewCanvas.addEventListener("pointerdown", onCanvasPointerDown);
  previewCanvas.addEventListener("pointermove", onCanvasPointerMove);
  previewCanvas.addEventListener("pointerenter", onCanvasPointerEnter);
  previewCanvas.addEventListener("pointerleave", onCanvasPointerLeave);
  previewCanvas.addEventListener("pointerup", onCanvasPointerUp);
  previewCanvas.addEventListener("pointercancel", onCanvasPointerCancel);
  previewCanvas.addEventListener("contextmenu", onCanvasContextMenu);

  function onCanvasPointerEnter(event) {
    if (!state.lightTable.active || event.pointerType === "touch") return;
    state.lightTable.pointer = { clientX: event.clientX, clientY: event.clientY };
    scheduleLoupeFrame();
  }

  function resetLoupeTarget({ clearPointer = true } = {}) {
    clearFocusMode();
    clearTimeout(state.lightTable.hydrationTimer);
    state.lightTable.hydrationTimer = 0;
    state.lightTable.hydrationRequestId += 1;
    state.lightTable.activeItemId = null;
    if (clearPointer) state.lightTable.pointer = null;
    hideLoupe();
  }

  function onCanvasPointerLeave(event) {
    if (!state.lightTable.active || event.pointerType === "touch") return;
    // Canvas 之外仍是无限白色观片台；仅离开整个 previewWrap 时才清理镜片。
    if (previewWrap.contains(event.relatedTarget)) return;
    if (state.lightTable.focusMode) return;
    resetLoupeTarget();
  }

  function getSelectedFrameItems() {
    const items = getSortedItems().filter((item) => state.selectedFrameIds.has(item.id));
    if (items.length !== state.selectedFrameIds.size) pruneSelectedFrames();
    return items;
  }

  function pruneSelectedFrames() {
    const itemIds = new Set(state.items.map((item) => item.id));
    let changed = false;
    state.selectedFrameIds.forEach((itemId) => {
      if (!itemIds.has(itemId)) {
        state.selectedFrameIds.delete(itemId);
        changed = true;
      }
    });
    if (state.frameSelectionAnchorId && !itemIds.has(state.frameSelectionAnchorId)) {
      state.frameSelectionAnchorId = null;
      changed = true;
    }
    if (changed) syncFrameSelectionControls();
    return changed;
  }

  function syncFrameSelectionControls() {
    const selectedCount = state.selectedFrameIds.size;
    const hasItems = state.items.length > 0;
    frameSelectButton.disabled = !hasItems || state.isExporting;
    frameSelectButton.setAttribute("aria-pressed", String(state.frameSelectionMode));
    clearFrameSelectionButton.disabled = !selectedCount || state.isExporting;
    batchFrameExportButton.disabled = !selectedCount || state.isExporting;
    frameSelectionCounter.textContent = `已选 ${selectedCount} 帧`;
  }

  function selectFrameRange(itemId) {
    const items = getSortedItems();
    const targetIndex = items.findIndex((item) => item.id === itemId);
    const anchorIndex = items.findIndex((item) => item.id === state.frameSelectionAnchorId);
    if (targetIndex < 0 || anchorIndex < 0) {
      state.selectedFrameIds.add(itemId);
      state.frameSelectionAnchorId = itemId;
      return;
    }
    const [start, end] = targetIndex < anchorIndex ? [targetIndex, anchorIndex] : [anchorIndex, targetIndex];
    for (let index = start; index <= end; index += 1) {
      state.selectedFrameIds.add(items[index].id);
    }
  }

  function toggleFrameSelection(itemId, { range = false } = {}) {
    if (range) {
      selectFrameRange(itemId);
    } else if (state.selectedFrameIds.has(itemId)) {
      state.selectedFrameIds.delete(itemId);
      state.frameSelectionAnchorId = itemId;
    } else {
      state.selectedFrameIds.add(itemId);
      state.frameSelectionAnchorId = itemId;
    }
    syncFrameSelectionControls();
    render();
  }

  function clearFrameSelection({ redraw = true } = {}) {
    state.selectedFrameIds.clear();
    state.frameSelectionAnchorId = null;
    syncFrameSelectionControls();
    if (redraw) render();
  }

  function canvasPoint(event, canvasRect = null) {
    const rect = canvasRect || previewCanvas.getBoundingClientRect();
    if (!rect.width || !rect.height) return { x: 0, y: 0 };
    return {
      x: (event.clientX - rect.left) * (previewCanvas.width / rect.width),
      y: (event.clientY - rect.top) * (previewCanvas.height / rect.height),
    };
  }

  // 命中检测：点在信息栏暗盒图上（drawInfoBlock 渲染时记录其实际绘制矩形）
  function hitInfoBlockCanister(point) {
    const hitRect = state.infoBlockCanisterHit;
    if (!hitRect || !state.items.length || state.lightTable.active) return false;
    return point.x >= hitRect.x && point.x <= hitRect.x + hitRect.w
      && point.y >= hitRect.y && point.y <= hitRect.y + hitRect.h;
  }

  function hitFrame(point) {
    return state.frameRects.find((frame) => {
      const bounds = frame.bounds;
      if (
        point.x < bounds.x || point.x > bounds.x + bounds.w ||
        point.y < bounds.y || point.y > bounds.y + bounds.h
      ) {
        return false;
      }
      return frame.regions.some(
        (region) =>
          point.x >= region.x &&
          point.x <= region.x + region.w &&
          point.y >= region.y &&
          point.y <= region.y + region.h,
      );
    });
  }

  function onCanvasPointerDown(event) {
    if (event.button !== 0 || !state.items.length) return;
    if (state.lightTable.active) {
      event.preventDefault();
      // 触屏：双指进入捏合变倍；单指走轻点→平移，附长按选帧计时
      if (event.pointerType === "touch") {
        const pinch = state.lightTable.pinch
          || (state.lightTable.pinch = { ids: [], points: new Map(), startDist: 0, startMag: state.lightTable.magnification });
        pinch.points.set(event.pointerId, { clientX: event.clientX, clientY: event.clientY });
        if (!pinch.ids.includes(event.pointerId)) pinch.ids.push(event.pointerId);
        previewCanvas.setPointerCapture(event.pointerId);

        if (pinch.ids.length >= 2) {
          const previousDrag = state.canvasDrag;
          if (previousDrag?.longPressTimer) clearTimeout(previousDrag.longPressTimer);
          const [a, b] = pinch.ids.map((id) => pinch.points.get(id)).filter(Boolean);
          pinch.startDist = Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY) || 1;
          pinch.startMag = state.lightTable.magnification;
          if (previousDrag) previousDrag.mode = "light-pinched";
          else {
            state.canvasDrag = {
              mode: "light-pinched",
              pointerId: event.pointerId,
              pointerType: "touch",
              startX: event.clientX,
              startY: event.clientY,
              scrollLeft: previewWrap.scrollLeft,
              scrollTop: previewWrap.scrollTop,
              longPressTimer: 0,
            };
          }
          hideLoupe();
          return;
        }

        state.canvasDrag = {
          mode: "light-pending",
          pointerId: event.pointerId,
          pointerType: event.pointerType,
          startX: event.clientX,
          startY: event.clientY,
          scrollLeft: previewWrap.scrollLeft,
          scrollTop: previewWrap.scrollTop,
          longPressTimer: 0,
        };
        const drag = state.canvasDrag;
        const originPoint = canvasPoint(event);
        drag.longPressTimer = window.setTimeout(() => {
          if (state.canvasDrag !== drag || drag.mode !== "light-pending") return;
          const hit = hitFrame(originPoint);
          if (!hit) return;
          drag.mode = "light-selected";
          const selecting = !state.selectedFrameIds.has(hit.id);
          toggleFrameSelection(hit.id);
          navigator.vibrate?.(12);
          setLightTableStatus(selecting
            ? `已选 ${state.selectedFrameIds.size} 帧 · ${hit.item.name}`
            : `已取消选择 · ${hit.item.name}`);
        }, LONG_PRESS_SELECT_MS);
        return;
      }

      state.canvasDrag = {
        mode: "light-pending",
        pointerId: event.pointerId,
        pointerType: event.pointerType,
        startX: event.clientX,
        startY: event.clientY,
        scrollLeft: previewWrap.scrollLeft,
        scrollTop: previewWrap.scrollTop,
        longPressTimer: 0,
      };
      previewCanvas.setPointerCapture(event.pointerId);
      hideLoupe();
      return;
    }
    const pointerPoint = canvasPoint(event);
    // 暗盒命中优先：与照片共用一套「按下记录 → 抬起未拖动则弹菜单」的交互，
    // 因此这里只登记 pending，真正的菜单弹出放在 onCanvasPointerUp（与单帧菜单时机一致）
    const canisterHit = hitInfoBlockCanister(pointerPoint);
    const hit = canisterHit ? null : hitFrame(pointerPoint);
    state.canvasDrag = {
      mode: canisterHit ? "canister-pending" : hit ? "pending" : "pan",
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      scrollLeft: previewWrap.scrollLeft,
      scrollTop: previewWrap.scrollTop,
      itemId: hit ? hit.id : null,
      selecting: Boolean(hit && (state.frameSelectionMode || event.ctrlKey || event.metaKey || event.shiftKey)),
      range: Boolean(hit && event.shiftKey),
      ghost: null,
    };
    previewCanvas.setPointerCapture(event.pointerId);
    if (!hit && !canisterHit) previewWrap.classList.add("is-panning");
    event.preventDefault();
  }

  function onCanvasPointerMove(event) {
    const drag = state.canvasDrag;
    if (state.lightTable.active) {
      // 捏合中的触点：更新距离并换算倍率
      const pinch = state.lightTable.pinch;
      if (pinch?.ids.includes(event.pointerId)) {
        if (!pinch.points.has(event.pointerId)) return;
        pinch.points.set(event.pointerId, { clientX: event.clientX, clientY: event.clientY });
        if (drag?.mode === "light-pinched" && pinch.ids.length >= 2) {
          const [a, b] = pinch.ids.map((id) => pinch.points.get(id)).filter(Boolean);
          if (a && b) {
            const distance = Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
            setLoupeMagnification(pinch.startMag * distance / pinch.startDist);
          }
        }
        return;
      }
      if (!drag) {
        if (event.pointerType === "touch") return;
        state.lightTable.pointer = { clientX: event.clientX, clientY: event.clientY };
        if (state.lightTable.focusMode) panFocusedBackground(event);
        scheduleLoupeFrame();
        return;
      }
      if (event.pointerId !== drag.pointerId) return;
      const moved = Math.hypot(event.clientX - drag.startX, event.clientY - drag.startY);
      if (drag.mode === "light-pending" && moved >= 6) {
        if (drag.longPressTimer) {
          clearTimeout(drag.longPressTimer);
          drag.longPressTimer = 0;
        }
        drag.mode = "light-pan";
        previewWrap.classList.add("is-panning");
        resetLoupeTarget({ clearPointer: event.pointerType === "touch" });
      }
      if (drag.mode === "light-pan") {
        previewWrap.scrollLeft = drag.scrollLeft - (event.clientX - drag.startX);
        previewWrap.scrollTop = drag.scrollTop - (event.clientY - drag.startY);
      }
      return;
    }
    if (!drag || event.pointerId !== drag.pointerId) return;

    if (drag.mode === "canister-pending") {
      const moved = Math.hypot(event.clientX - drag.startX, event.clientY - drag.startY);
      if (moved < 6) return;
      // 从暗盒上开始拖动 → 退化为平移画布（与在空白处拖动一致）
      drag.mode = "pan";
      previewWrap.classList.add("is-panning");
      return;
    }

    if (drag.mode === "pan") {
      previewWrap.scrollLeft = drag.scrollLeft - (event.clientX - drag.startX);
      previewWrap.scrollTop = drag.scrollTop - (event.clientY - drag.startY);
      return;
    }

    if (drag.mode === "pending") {
      const moved = Math.hypot(event.clientX - drag.startX, event.clientY - drag.startY);
      if (moved < 6) return;
      if (drag.selecting) {
        drag.mode = "select-cancel";
        return;
      }
      drag.mode = "reorder";
      state.dragItemId = drag.itemId;
      drag.ghost = createDragGhost(drag.itemId);
      previewWrap.classList.add("is-reordering");
    }

    if (drag.mode === "reorder") {
      if (drag.ghost) {
        drag.ghost.style.left = `${event.clientX}px`;
        drag.ghost.style.top = `${event.clientY}px`;
      }
      const dropIndex = computeDropIndex(canvasPoint(event));
      if (dropIndex !== state.dropIndex) {
        state.dropIndex = dropIndex;
        render();
      }
    }
  }

  function onCanvasPointerUp(event) {
    const drag = state.canvasDrag;
    if (!drag || event.pointerId !== drag.pointerId) return;
    if (state.lightTable.active) {
      const wasTap = drag.mode === "light-pending";
      const wasSelected = drag.mode === "light-selected";
      const pointerType = drag.pointerType;
      if (drag.longPressTimer) clearTimeout(drag.longPressTimer);
      cancelCanvasDrag();

      // 捏合登记清理：任一手指抬起即结束捏合手势
      const pinch = state.lightTable.pinch;
      if (pinch?.ids.includes(event.pointerId)) {
        pinch.ids = pinch.ids.filter((id) => id !== event.pointerId);
        pinch.points.delete(event.pointerId);
        if (pinch.ids.length < 2) {
          state.lightTable.pinch = null;
          restartHudIdleFade();
        }
        return;
      }
      if (wasSelected) return;

      if (wasTap) {
        const pointer = { clientX: event.clientX, clientY: event.clientY };
        state.lightTable.pointer = pointer;
        // 修饰键点击 → 选帧（Shift 为范围选），否则切换聚焦
        if (event.shiftKey || event.ctrlKey || event.metaKey) {
          const hit = hitFrame(canvasPoint(event));
          if (hit) {
            toggleFrameSelection(hit.id, { range: event.shiftKey });
            setLightTableStatus(`已选 ${state.selectedFrameIds.size} 帧 · ${hit.item.name}`);
            scheduleLoupeFrame();
            return;
          }
        }
        toggleFocusMode(pointer);
      } else if (pointerType !== "touch" && !state.lightTable.focusMode) {
        state.lightTable.pointer = { clientX: event.clientX, clientY: event.clientY };
        scheduleLoupeFrame();
      } else {
        restartHudIdleFade();
      }
      return;
    }

    // 点击暗盒（按下未拖动）：复用单帧操作菜单，弹出时机与照片完全一致
    if (drag.mode === "canister-pending") {
      showCanisterMenu(event.clientX, event.clientY);
      cancelCanvasDrag();
      return;
    }

    // 如果是 pending 状态且没有移动过，说明是点击而非拖拽 → 弹出菜单
    if (drag.mode === "pending") {
      const hit = hitFrame(canvasPoint(event));
      if (hit) {
        if (drag.selecting) {
          toggleFrameSelection(hit.id, { range: drag.range });
        } else {
          showFrameMenu(hit.id, event.clientX, event.clientY);
        }
      }
      cancelCanvasDrag();
      return;
    }

    if (drag.mode === "reorder" && state.dropIndex !== null) {
      moveItemToIndex(drag.itemId, state.dropIndex);
    }
    cancelCanvasDrag();
  }

  function onCanvasContextMenu(event) {
    event.preventDefault();
    if (state.lightTable.active) return;
    const hit = hitFrame(canvasPoint(event));
    if (hit) {
      showFrameMenu(hit.id, event.clientX, event.clientY);
    }
  }

  function onCanvasPointerCancel() {
    const inLightTable = state.lightTable.active;
    if (inLightTable) {
      const pinch = state.lightTable.pinch;
      if (pinch) {
        // pointercancel 不带可靠 pointerId 过滤，直接结束捏合
        state.lightTable.pinch = null;
      }
    }
    cancelCanvasDrag();
    if (inLightTable) resetLoupeTarget();
  }

  function cancelCanvasDrag() {
    const drag = state.canvasDrag;
    if (drag?.longPressTimer) clearTimeout(drag.longPressTimer);
    if (drag && drag.ghost) drag.ghost.remove();
    const needsRedraw = state.dragItemId !== null || state.dropIndex !== null;
    state.canvasDrag = null;
    state.dragItemId = null;
    state.dropIndex = null;
    previewWrap.classList.remove("is-panning", "is-reordering", "is-selecting-frame");
    if (needsRedraw) {
      render();
      renderPhotoList();
    }
  }

  function createDragGhost(itemId) {
    const item = state.items.find((entry) => entry.id === itemId);
    if (!item) return null;
    const ghost = document.createElement("div");
    ghost.className = "drag-ghost";
    const img = document.createElement("img");
    img.src = item.thumbUrl;
    img.alt = "";
    ghost.appendChild(img);
    document.body.appendChild(ghost);
    return ghost;
  }

  // 根据画布坐标求插入位置（0..items.length）
  function computeDropIndex(point) {
    const options = getRenderOptions(1);
    const layout = computeLayout(state.items.length, options);
    let row;
    if (layout.rowOffsets) {
      // a4-real 分页布局：行 y 含页偏移（与绘制同一坐标系），按「落点 + 半行距」落入的行带判定
      const probe = point.y + options.rowGap / 2;
      row = 0;
      for (let index = 0; index < layout.rowOffsets.length; index += 1) {
        if (layout.rowOffsets[index] <= probe) row = index;
        else break;
      }
      row = clamp(row, 0, layout.rows.length - 1);
    } else {
      const stripStride = layout.stripH + options.rowGap;
      row = clamp(
        Math.floor((point.y - options.sheetPad + options.rowGap / 2) / stripStride),
        0,
        layout.rows.length - 1,
      );
    }
    const rowInfo = layout.rows[row];
    const rowX = getRowX(layout, row, options);
    if (options.leaderDirection === "right") {
      // RTL：槽位从右向左排布，序号 0 锚定在条带右内缘
      const stripW = getRowStripWidth(layout, rowInfo, options);
      const anchorRight = getRowRtlAnchorRight(layout, rowX, stripW, rowInfo, options);
      const slot = clamp(
        Math.round((anchorRight - point.x) / (options.slotW + options.slotGap)),
        0,
        rowInfo.count,
      );
      return clamp(rowInfo.start + slot, 0, state.items.length);
    }
    const frameStartX = rowX + options.stripPadX;
    const contentStartX = getRowContentStartX(frameStartX, rowInfo, options);
    const slot = clamp(
      Math.round((point.x - contentStartX) / (options.slotW + options.slotGap)),
      0,
      rowInfo.count,
    );
    return clamp(rowInfo.start + slot, 0, state.items.length);
  }

  // 拖拽落点：先固化当前显示顺序并切到自定义模式，再移动
  function moveItemToIndex(itemId, dropIndex) {
    solidifyCustomOrder();
    const fromIndex = state.items.findIndex((item) => item.id === itemId);
    if (fromIndex < 0) return;
    let toIndex = dropIndex;
    if (fromIndex < toIndex) toIndex -= 1;
    toIndex = clamp(toIndex, 0, state.items.length - 1);
    if (toIndex === fromIndex) return;
    const [moved] = state.items.splice(fromIndex, 1);
    state.items.splice(toIndex, 0, moved);
  }

  function solidifyCustomOrder() {
    state.items = getSortedItems();
    reverseSort.checked = false;
    state.sortRequestGeneration += 1;
    sortControls.forEach((input) => { input.disabled = false; });
    setSortMode("custom");
  }

  function isHalfFrameMode() {
    return Boolean(getFormat().half);
  }

  function is120Format() {
    return getFormat().family === "120";
  }

  function is135WideFormat() {
    const format = getFormat();
    return format.family === "135" && Boolean(format.wide);
  }

  function getHalfFrameInputMode() {
    return document.querySelector("input[name='halfFrameMode']:checked")?.value || "cropped";
  }

  function isCroppedHalfFrameMode() {
    return isHalfFrameMode() && getHalfFrameInputMode() === "cropped";
  }

  const FILM_135 = FilmFrame135.FILM_135;

  const WIDE_135_SPECS = {
    xpan: FilmFrame.FORMATS.xpan,
    "135-69": FilmFrame.FORMATS["135-69"],
  };

  const FORMATS = {
    "135": FilmFrame.FORMATS["135"],
    half: FilmFrame.FORMATS.half,
    wide: { family: "135", wide: true },
    "645": FilmFrame.FORMATS["645"],
    "66": FilmFrame.FORMATS["66"],
    "67": FilmFrame.FORMATS["67"],
    "69": FilmFrame.FORMATS["69"],
    "612": FilmFrame.FORMATS["612"],
    "617": FilmFrame.FORMATS["617"],
  };

  function getWide135SpecId() {
    if (WIDE_135_SPECS[frameAspect.value]) return frameAspect.value;
    return WIDE_135_SPECS[wideSpecSelect.value] ? wideSpecSelect.value : "xpan";
  }

  function getFormat() {
    const format = FORMATS[frameAspect.value];
    if (format?.wide || WIDE_135_SPECS[frameAspect.value]) {
      return { ...FORMATS.wide, ...WIDE_135_SPECS[getWide135SpecId()] };
    }
    return format || FORMATS["135"];
  }

  function get135WideCapacity(format) {
    const standardGapMm = 2;
    const rowWidthMm = 6 * FILM_135.standardImageWidthMm + 5 * standardGapMm;
    return Math.max(1, Math.floor((rowWidthMm + standardGapMm) / (format.imageWidthMm + standardGapMm)));
  }

  function updateFrameModeControls() {
    const halfFrame = isHalfFrameMode();
    const cropped = isCroppedHalfFrameMode();
    const format120 = is120Format();
    const wide135 = is135WideFormat();
    const format = getFormat();

    Array.from(columnsSelect.options).forEach((option) => {
      option.disabled = false;
    });
    wideSpecField.hidden = !wide135;
    if (WIDE_135_SPECS[frameAspect.value]) {
      wideSpecSelect.value = frameAspect.value;
      frameAspect.value = "wide";
    }
    halfFrameModeField.hidden = !halfFrame;
    if (cropped) {
      columnsSelect.disabled = true;
      columnsHint.textContent = "单张裁切固定每行 12 张（片头首行 10 张）";
      columnsHint.hidden = false;
    } else if (format120) {
      columnsSelect.value = String(format.columns);
      columnsSelect.disabled = true;
      columnsHint.textContent = `120 画幅固定每行 ${format.columns} 张`;
      columnsHint.hidden = false;
    } else if (wide135) {
      const capacity = get135WideCapacity(format);
      columnsSelect.value = String(capacity);
      columnsSelect.disabled = true;
      columnsHint.textContent = `135 宽幅按固定片条宽度自动每行 ${capacity} 张`;
      columnsHint.hidden = false;
    } else {
      columnsSelect.value = String(halfFrame ? state.manualHalfColumns : state.manual135Columns);
      columnsSelect.disabled = false;
      Array.from(columnsSelect.options).forEach((option) => {
        option.disabled = halfFrame && Number(option.value) < 4;
      });
      columnsHint.textContent = halfFrame ? "每个文件按一张包含两格的横向扫描图处理" : "";
      columnsHint.hidden = !halfFrame;
    }

    showLeader.disabled = format120;
    if (leaderHint) {
      leaderHint.textContent = format120 ? "120 胶片无片头片尾" : "";
      leaderHint.hidden = !format120;
    }
    if (leaderDirectionField && leaderDirectionSelect) {
      // 片头方向仅对 135 家族有意义；120 无片头片尾，隐藏并禁用
      leaderDirectionField.hidden = format120;
      leaderDirectionSelect.disabled = format120;
    }

    const stock = resolveStock(getActiveStock());
    const sprocketsLocked = format120 && !stock.sprocketsIn120;
    showSprockets.disabled = sprocketsLocked;
    if (sprocketsHint) {
      sprocketsHint.textContent = sprocketsLocked
        ? "120 画幅默认无齿孔，仅电影卷（ECN-2）保留"
        : "";
      sprocketsHint.hidden = !sprocketsLocked;
    }

    imageInSprockets.disabled = !wide135;
    imageInEdgeText.disabled = !wide135;
    if (imageCoverageHint) {
      imageCoverageHint.textContent = wide135 ? "两个成像区域独立控制，仅改变曝光范围" : "仅适用于 135 宽幅";
      imageCoverageHint.hidden = wide135;
    }

    // a4-real 模式锁定帧宽/列数（画幅切换后仍需保持锁定态）
    syncA4RealControls();
    // PDF/导出方式控件显隐依赖 is120Format()，画幅切换后同步刷新
    updateExportFormatControls();
  }

  async function handleFrameModeChange() {
    updateFrameModeControls();
    closeCropModal();
    if (!state.items.length) {
      render();
      return;
    }
    await rebuildAllItemSources(true);
  }

  function getRowContentStartX(frameStartX, rowInfo, options) {
    return frameStartX + (rowInfo.leader ? options.leaderAdvance : 0);
  }

  function getSlotX(contentStartX, slot, options) {
    return contentStartX + slot * (options.slotW + options.slotGap);
  }

  updateExportFormatControls();
  updateFrameModeControls();
  drawEmptyCanvas();
  applyPreviewZoom();
  syncLightTableControls();

  async function readImageFile(file) {
    const [originalSource, taken] = await Promise.all([
      decodeImage(file),
      readExifDate(file).catch(() => null),
    ]);
    const item = {
      id: state.nextId++,
      file,
      originalSource,
      originalWidth: originalSource.width,
      originalHeight: originalSource.height,
      editSource: null,
      editWidth: originalSource.width,
      editHeight: originalSource.height,
      cropRect: null,
      manualTurns: 0,
      autoTurns: 0,
      editVersion: 0,
      sourceGeneration: 0,
      source: originalSource,
      width: originalSource.width,
      height: originalSource.height,
      name: file.name,
      modified: file.lastModified || 0,
      taken,
      thumbUrl: URL.createObjectURL(file),
      ownsThumbUrl: true,
    };
    await rebuildItemSource(item, item.editVersion);
    return item;
  }

  async function readRemotePreview(descriptor, blob) {
    const originalSource = await decodeImage(blob);
    const thumbUrl = URL.createObjectURL(blob);
    const item = {
      id: state.nextId++,
      file: null,
      originalSource,
      originalWidth: originalSource.width,
      originalHeight: originalSource.height,
      editSource: null,
      editWidth: originalSource.width,
      editHeight: originalSource.height,
      cropRect: null,
      manualTurns: 0,
      autoTurns: 0,
      editVersion: 0,
      sourceGeneration: 0,
      source: originalSource,
      width: originalSource.width,
      height: originalSource.height,
      name: descriptor.filename,
      modified: Number(descriptor.server_mtime || 0) * 1000,
      taken: null,
      thumbUrl,
      ownsThumbUrl: true,
      remote: {
        descriptor,
        quality: "preview",
        hydrationPromise: null,
        abortController: null,
        revision: 0,
      },
    };
    await rebuildItemSource(item, item.editVersion);
    return item;
  }

  function mimeTypeForRemoteFile(descriptor, responseType) {
    const type = (responseType || "").split(";", 1)[0].trim().toLowerCase();
    if (/^image\/(jpeg|png|webp)$/.test(type)) return type;
    if (type && type !== "application/octet-stream") return null;
    const name = descriptor.filename.toLowerCase();
    if (/\.jpe?g$/.test(name)) return "image/jpeg";
    if (name.endsWith(".png")) return "image/png";
    if (name.endsWith(".webp")) return "image/webp";
    return null;
  }

  function serializeSourceCommit(commit) {
    const queued = state.sourceCommitPromise.then(commit, commit);
    state.sourceCommitPromise = queued.catch(() => {});
    return queued;
  }

  async function ensureOriginal(item, reason = "操作") {
    if (!item.remote || item.remote.quality === "full") return item;
    if (item.remote.hydrationPromise) return item.remote.hydrationPromise;

    const remote = item.remote;
    const revision = remote.revision;
    const controller = new AbortController();
    remote.abortController = controller;
    remote.quality = "loading";
    renderPhotoList();

    remote.hydrationPromise = (async () => {
      let fullSource = null;
      try {
        const blob = await BaiduPanIntegration.downloadFile(remote.descriptor.fs_id, controller.signal);
        const mimeType = mimeTypeForRemoteFile(remote.descriptor, blob.type);
        if (!mimeType) throw new Error("不支持的图片格式");
        const file = new File([blob], remote.descriptor.filename, {
          type: mimeType,
          lastModified: Number(remote.descriptor.server_mtime || 0) * 1000,
        });
        const result = await Promise.all([
          decodeImage(file),
          readExifDate(file).catch(() => null),
        ]);
        fullSource = result[0];
        const taken = result[1];
        if (
          controller.signal.aborted ||
          remote.revision !== revision ||
          !state.items.includes(item)
        ) {
          closeSource(fullSource);
          throw new DOMException("Aborted", "AbortError");
        }

        await serializeSourceCommit(async () => {
          if (
            controller.signal.aborted ||
            remote.revision !== revision ||
            !state.items.includes(item)
          ) {
            throw new DOMException("Aborted", "AbortError");
          }
          const candidate = {
            ...item,
            file,
            originalSource: fullSource,
            originalWidth: fullSource.width,
            originalHeight: fullSource.height,
            editSource: null,
            editWidth: fullSource.width,
            editHeight: fullSource.height,
            cropRect: null,
            source: fullSource,
            width: fullSource.width,
            height: fullSource.height,
            taken,
            sourceGeneration: 0,
          };
          let rebuilt = false;
          let itemSourceGeneration = item.sourceGeneration;
          while (!rebuilt && !controller.signal.aborted) {
            itemSourceGeneration = item.sourceGeneration;
            candidate.cropRect = item.cropRect ? { ...item.cropRect } : null;
            candidate.manualTurns = item.manualTurns;
            candidate.editVersion = item.editVersion + 1;
            candidate.editSource = null;
            candidate.editWidth = fullSource.width;
            candidate.editHeight = fullSource.height;
            candidate.source = fullSource;
            candidate.width = fullSource.width;
            candidate.height = fullSource.height;
            candidate.sourceGeneration = 0;
            state.reprocessGeneration += 1;
            rebuilt = await rebuildItemSource(candidate, candidate.editVersion);
            if (
              rebuilt &&
              (item.editVersion + 1 !== candidate.editVersion || item.sourceGeneration !== itemSourceGeneration)
            ) {
              closeDistinctSources(
                candidate.source === fullSource ? null : candidate.source,
                candidate.editSource === fullSource ? null : candidate.editSource,
              );
              rebuilt = false;
            }
          }
          if (
            !rebuilt ||
            controller.signal.aborted ||
            remote.revision !== revision ||
            !state.items.includes(item) ||
            item.editVersion + 1 !== candidate.editVersion ||
            item.sourceGeneration !== itemSourceGeneration
          ) {
            closeDistinctSources(candidate.source, candidate.editSource, fullSource);
            fullSource = null;
            throw new DOMException("Aborted", "AbortError");
          }

          const previewOriginal = item.originalSource;
          const previewEditSource = item.editSource;
          const previewSource = item.source;
          item.file = candidate.file;
          item.originalSource = candidate.originalSource;
          item.originalWidth = candidate.originalWidth;
          item.originalHeight = candidate.originalHeight;
          item.editSource = candidate.editSource;
          item.editWidth = candidate.editWidth;
          item.editHeight = candidate.editHeight;
          item.cropRect = candidate.cropRect;
          item.source = candidate.source;
          item.width = candidate.width;
          item.height = candidate.height;
          item.taken = candidate.taken;
          item.editVersion = candidate.editVersion;
          item.sourceGeneration += 1;
          item.autoTurns = candidate.autoTurns;
          remote.quality = "full";
          fullSource = null;
          const adopted = new Set([item.originalSource, item.editSource, item.source]);
          closeDistinctSources(
            adopted.has(previewSource) ? null : previewSource,
            adopted.has(previewEditSource) ? null : previewEditSource,
            adopted.has(previewOriginal) ? null : previewOriginal,
          );
        });
        render();
        renderPhotoList();
        return item;
      } catch (error) {
        if (fullSource && item.originalSource !== fullSource) closeSource(fullSource);
        if (error.name !== "AbortError" && remote.revision === revision) {
          remote.quality = "error";
          renderPhotoList();
        } else if (remote.revision === revision && remote.quality !== "full") {
          remote.quality = "preview";
        }
        throw error;
      } finally {
        if (remote.revision === revision) {
          remote.hydrationPromise = null;
          remote.abortController = null;
        }
      }
    })();

    return remote.hydrationPromise;
  }

  async function ensureAllOriginals(items, reason) {
    const pending = items.filter((item) => item.remote && item.remote.quality !== "full");
    if (!pending.length) return [];
    const failures = [];
    let nextIndex = 0;
    let completed = 0;
    const worker = async () => {
      while (nextIndex < pending.length && !state.exportCancelled) {
        const item = pending[nextIndex++];
        try {
          await ensureOriginal(item, reason);
        } catch (error) {
          failures.push({ item, error });
        } finally {
          completed += 1;
          statusTitle.textContent = `${reason}：正在获取原图 ${completed}/${pending.length}`;
        }
      }
    };
    await Promise.all(Array.from({ length: Math.min(3, pending.length) }, worker));
    return failures;
  }

  function cancelOriginalDownloads(items = state.items) {
    items.forEach((item) => item.remote?.abortController?.abort());
  }

  function closeSource(source) {
    if (source && typeof source.close === "function") source.close();
  }

  function closeDistinctSources(...sources) {
    const seen = new Set();
    sources.forEach((source) => {
      if (!source || seen.has(source)) return;
      seen.add(source);
      closeSource(source);
    });
  }

  async function canvasToSource(canvas) {
    if (typeof createImageBitmap === "function") {
      try {
        return await createImageBitmap(canvas);
      } catch (error) {
        // 落回直接把 canvas 当作绘制源
      }
    }
    return canvas;
  }

  async function rotateSourceClockwise(source) {
    const canvas = document.createElement("canvas");
    canvas.width = source.height;
    canvas.height = source.width;
    const rotCtx = canvas.getContext("2d");
    rotCtx.translate(canvas.width, 0);
    rotCtx.rotate(Math.PI / 2);
    rotCtx.drawImage(source, 0, 0);
    return canvasToSource(canvas);
  }

  function getCurrentInputAdapter() {
    const format = getFormat();
    const formatId = isHalfFrameMode() ? "half" : format.id || frameAspect.value;
    return FilmFrame.getInputAdapter(formatId, getHalfFrameInputMode());
  }

  function targetPortraitMode() {
    return getCurrentInputAdapter().targetPortrait;
  }

  function getAutoTurnsForSource(source) {
    const portrait = targetPortraitMode();
    const matches = portrait ? source.height >= source.width : source.width >= source.height;
    return matches ? 0 : 1;
  }

  function normalizeCropRect(rect) {
    if (!rect) return null;
    const x = clamp(Number(rect.x) || 0, 0, 1);
    const y = clamp(Number(rect.y) || 0, 0, 1);
    const right = clamp(x + (Number(rect.w) || 0), x, 1);
    const bottom = clamp(y + (Number(rect.h) || 0), y, 1);
    if (right <= x || bottom <= y) return null;
    return { x, y, w: right - x, h: bottom - y };
  }

  function cropRectToPixels(rect, width, height) {
    const normalized = normalizeCropRect(rect);
    if (!normalized) return { x: 0, y: 0, width, height };
    const x = clamp(Math.floor(normalized.x * width), 0, width - 1);
    const y = clamp(Math.floor(normalized.y * height), 0, height - 1);
    const right = clamp(Math.ceil((normalized.x + normalized.w) * width), x + 1, width);
    const bottom = clamp(Math.ceil((normalized.y + normalized.h) * height), y + 1, height);
    return { x, y, width: right - x, height: bottom - y };
  }

  async function cropSourceToRect(source, rect) {
    const crop = cropRectToPixels(rect, source.width, source.height);
    const canvas = document.createElement("canvas");
    canvas.width = crop.width;
    canvas.height = crop.height;
    const cropCtx = canvas.getContext("2d");
    cropCtx.drawImage(
      source,
      crop.x,
      crop.y,
      crop.width,
      crop.height,
      0,
      0,
      crop.width,
      crop.height,
    );
    return canvasToSource(canvas);
  }

  function mapRotatedCropToSource(x, y, width, height, sourceWidth, sourceHeight, turns) {
    switch ((turns % 4 + 4) % 4) {
      case 1:
        return { x: y, y: sourceHeight - x - width, width: height, height: width };
      case 2:
        return {
          x: sourceWidth - x - width,
          y: sourceHeight - y - height,
          width,
          height,
        };
      case 3:
        return { x: sourceWidth - y - height, y: x, width: height, height: width };
      default:
        return { x, y, width, height };
    }
  }

  function composeCropRects(existing, local) {
    const base = normalizeCropRect(existing) || { x: 0, y: 0, w: 1, h: 1 };
    return normalizeCropRect({
      x: base.x + local.x * base.w,
      y: base.y + local.y * base.h,
      w: local.w * base.w,
      h: local.h * base.h,
    });
  }

  async function rebuildItemSource(item, editVersion) {
    const sourceGeneration = ++item.sourceGeneration;
    const original = item.originalSource;
    let editCandidate = null;
    let candidate = original;
    const ownedSources = new Set();

    if (item.cropRect) {
      editCandidate = await cropSourceToRect(original, item.cropRect);
      candidate = editCandidate;
      ownedSources.add(editCandidate);
    }

    const autoTurns = getAutoTurnsForSource(candidate);
    if (autoTurns) {
      const next = await rotateSourceClockwise(candidate);
      candidate = next;
      ownedSources.add(next);
    }

    for (let turn = 0; turn < item.manualTurns; turn += 1) {
      const previousCandidate = candidate;
      const next = await rotateSourceClockwise(previousCandidate);
      if (previousCandidate !== original && previousCandidate !== editCandidate) {
        ownedSources.delete(previousCandidate);
        closeSource(previousCandidate);
      }
      candidate = next;
      ownedSources.add(next);
    }

    const current =
      sourceGeneration === item.sourceGeneration &&
      editVersion === item.editVersion;
    if (!current) {
      closeDistinctSources(...ownedSources);
      return false;
    }

    const previousSource = item.source;
    const previousEditSource = item.editSource;
    item.editSource = editCandidate;
    item.editWidth = editCandidate ? editCandidate.width : original.width;
    item.editHeight = editCandidate ? editCandidate.height : original.height;
    item.source = candidate;
    item.width = candidate.width;
    item.height = candidate.height;
    item.autoTurns = autoTurns;

    const adopted = new Set([original, editCandidate, candidate]);
    closeDistinctSources(
      adopted.has(previousSource) ? null : previousSource,
      adopted.has(previousEditSource) ? null : previousEditSource,
    );
    return true;
  }

  async function rebuildAllItemSources(fitAfter = false) {
    const generation = ++state.reprocessGeneration;
    previewWrap.classList.add("is-loading");
    exportButton.disabled = true;
    const items = [...state.items];
    await Promise.all(items.map((item) => rebuildItemSource(item, item.editVersion)));
    if (generation !== state.reprocessGeneration) return;
    render();
    renderPhotoList();
    if (fitAfter) fitPreviewToViewport();
  }

  async function decodeImage(file) {
    // createImageBitmap 会应用 EXIF 方向，且不经过 base64，内存开销更小
    if (typeof createImageBitmap === "function") {
      try {
        return await createImageBitmap(file, { imageOrientation: "from-image" });
      } catch (error) {
        // 落回 <img> 解码
      }
    }
    return new Promise((resolve, reject) => {
      const url = URL.createObjectURL(file);
      const image = new Image();
      image.onload = () => {
        URL.revokeObjectURL(url);
        // 与 ImageBitmap 对齐 width/height 接口
        image.width = image.naturalWidth;
        image.height = image.naturalHeight;
        resolve(image);
      };
      image.onerror = (event) => {
        URL.revokeObjectURL(url);
        reject(event);
      };
      image.src = url;
    });
  }

  // 从 JPEG APP1 段读取 EXIF 拍摄时间（DateTimeOriginal），失败返回 null
  async function readExifDate(file) {
    if (file.type !== "image/jpeg") return null;
    const buffer = await file.slice(0, 256 * 1024).arrayBuffer();
    const view = new DataView(buffer);
    if (view.byteLength < 4 || view.getUint16(0) !== 0xffd8) return null;

    let offset = 2;
    while (offset + 4 <= view.byteLength) {
      const marker = view.getUint16(offset);
      const size = view.getUint16(offset + 2);
      if (marker === 0xffe1 && offset + 10 <= view.byteLength && view.getUint32(offset + 4) === 0x45786966) {
        return parseTiffDate(view, offset + 10, size - 8);
      }
      if ((marker & 0xff00) !== 0xff00) break;
      offset += 2 + size;
    }
    return null;
  }

  function parseTiffDate(view, tiffStart, tiffLength) {
    if (tiffLength < 8 || tiffStart + tiffLength > view.byteLength) return null;
    const littleEndian = view.getUint16(tiffStart) === 0x4949;
    const read16 = (o) => view.getUint16(o, littleEndian);
    const read32 = (o) => view.getUint32(o, littleEndian);

    const readIfd = (ifdOffset, wantedTag) => {
      const base = tiffStart + ifdOffset;
      if (base + 2 > view.byteLength) return null;
      const count = read16(base);
      for (let i = 0; i < count; i += 1) {
        const entry = base + 2 + i * 12;
        if (entry + 12 > view.byteLength) return null;
        if (read16(entry) === wantedTag) return entry;
      }
      return null;
    };

    const readAsciiValue = (entry) => {
      const size = read32(entry + 4);
      const valueOffset = size > 4 ? tiffStart + read32(entry + 8) : entry + 8;
      if (valueOffset + size > view.byteLength) return null;
      let text = "";
      for (let i = 0; i < size; i += 1) {
        const code = view.getUint8(valueOffset + i);
        if (!code) break;
        text += String.fromCharCode(code);
      }
      return text;
    };

    const ifd0 = read32(tiffStart + 4);
    // ExifIFD 里的 DateTimeOriginal (0x9003)，退回 IFD0 的 DateTime (0x0132)
    const exifPointer = readIfd(ifd0, 0x8769);
    let entry = exifPointer ? readIfd(read32(exifPointer + 8), 0x9003) : null;
    if (!entry) entry = readIfd(ifd0, 0x0132);
    if (!entry) return null;

    const text = readAsciiValue(entry);
    const match = text && text.match(/^(\d{4}):(\d{2}):(\d{2}) (\d{2}):(\d{2}):(\d{2})/);
    if (!match) return null;
    const timestamp = new Date(
      Number(match[1]),
      Number(match[2]) - 1,
      Number(match[3]),
      Number(match[4]),
      Number(match[5]),
      Number(match[6]),
    ).getTime();
    return Number.isNaN(timestamp) ? null : timestamp;
  }

  function getSortMode() {
    return document.querySelector("input[name='sortMode']:checked").value;
  }

  function getSortedItems() {
    const sortMode = getSortMode();
    const direction = reverseSort.checked ? -1 : 1;
    if (sortMode === "custom") {
      return direction === 1 ? [...state.items] : [...state.items].reverse();
    }
    return [...state.items].sort((a, b) => {
      const timeA = a.taken ?? a.modified;
      const timeB = b.taken ?? b.modified;
      const result =
        sortMode === "time"
          ? timeA - timeB || a.name.localeCompare(b.name, "zh-Hans-CN", { numeric: true })
          : a.name.localeCompare(b.name, "zh-Hans-CN", { numeric: true }) || timeA - timeB;
      return result * direction;
    });
  }

  function getBackgroundItem(items = getSortedItems(), itemId = state.backgroundItemId) {
    if (!items.length) return null;
    return items.find((item) => item.id === itemId) || items[0];
  }

  function normalizeBackgroundSelection() {
    if (!state.items.length) {
      state.backgroundItemId = null;
      return null;
    }
    if (state.backgroundItemId !== null && !state.items.some((item) => item.id === state.backgroundItemId)) {
      state.backgroundItemId = null;
    }
    return getBackgroundItem();
  }

  function updateBackgroundControls() {
    const enabled = backgroundStyle.value === "blur";
    backgroundBlur.disabled = !enabled || state.isExporting;
    backgroundBlurField.classList.toggle("is-disabled", !enabled);
    backgroundBlurValue.value = `${backgroundBlur.value} px`;
    const item = getBackgroundItem();
    backgroundHint.textContent = item
      ? `当前背景：${item.name}；点击单帧可更换`
      : "默认使用首图；点击单帧可将其设为背景";
  }

  function setBackgroundItem(itemId) {
    const item = state.items.find((entry) => entry.id === itemId);
    if (!item) return;
    state.backgroundItemId = item.id;
    backgroundStyle.value = "blur";
    updateBackgroundControls();
    render();
    showNotice(`已将 ${item.name} 设为虚化背景`);
  }

  backgroundStyle.addEventListener("change", updateBackgroundControls);
  backgroundBlur.addEventListener("input", updateBackgroundControls);
  updateBackgroundControls();

  // 控件高频输入时防抖，避免每个 input 事件都全量重绘
  // 渲染落定：新索引图浮现（配合 styles.css 的 canvasSettle 关键帧）
  function playCanvasSettle() {
    previewWrap.classList.add("is-rendering");
    window.clearTimeout(state.settleTimer);
    state.settleTimer = window.setTimeout(() => {
      previewWrap.classList.remove("is-rendering");
    }, 600);
  }

  function scheduleRender() {
    window.clearTimeout(state.renderTimer);
    state.renderTimer = window.setTimeout(render, 80);
  }

  function render() {
    if (!state.items.length) {
      drawEmptyCanvas();
      return;
    }

    pruneSelectedFrames();
    const options = getRenderOptions(1);
    const items = getSortedItems();
    // 信息区块字体按需加载：首个渲染用回退字体，加载完成后补一次渲染
    if (options.showInfoBlock) {
      ensureInfoBlockFont(options.infoBlockFontWeight).then((loaded) => {
        if (loaded && loadedInfoBlockFontWeight !== options.infoBlockFontWeight) {
          loadedInfoBlockFontWeight = options.infoBlockFontWeight;
          scheduleRender();
        }
      });
    }
    drawIndex(items, options);

    const rowCount = buildRows(items.length, options).length;
    statusTitle.textContent = `${rowCount} 行索引已生成`;
    imageCounter.textContent = `${items.length} 张`;
    emptyState.classList.add("is-hidden");
    // 数量变化时播放渲染落定动画，微调滑块时不重复触发
    const itemCountChanged = items.length !== state.renderedItemCount;
    state.renderedItemCount = items.length;
    previewWrap.classList.remove("is-empty", "is-loading");
    if (itemCountChanged) playCanvasSettle();
    exportButton.disabled = state.isExporting && !state.exportHydrationItems;
    syncFrameSelectionControls();
    if (state.lightTable.active) state.lightTable.sortedItems = items;
    syncLightTableControls();
    applyPreviewZoom();
  }

  function getFullResolutionScale(items) {
    const baseOptions = getRenderOptions(1);
    let scale = items.reduce((requiredScale, item) => {
      if (!Number.isFinite(item.width) || !Number.isFinite(item.height) || item.width <= 0 || item.height <= 0) {
        return requiredScale;
      }
      return Math.max(
        requiredScale,
        Math.min(item.width / baseOptions.slotW, item.height / baseOptions.slotH),
      );
    }, 1);

    // 部分画幅尺寸会取整；按 drawFrame 的 cover 规则复核，避免取整后仍缩小有效源像素。
    for (let attempt = 0; attempt < 3; attempt += 1) {
      const options = getRenderOptions(scale);
      const correction = items.reduce((requiredCorrection, item) => {
        if (!Number.isFinite(item.width) || !Number.isFinite(item.height) || item.width <= 0 || item.height <= 0) {
          return requiredCorrection;
        }
        const coverScale = Math.max(options.slotW / item.width, options.slotH / item.height);
        return coverScale < 1 ? Math.max(requiredCorrection, 1 / coverScale) : requiredCorrection;
      }, 1);
      if (correction <= 1) break;
      scale *= correction * (1 + Number.EPSILON * 8);
    }

    return scale;
  }

  function makeCrc32Table() {
    return Array.from({ length: 256 }, (_, index) => {
      let value = index;
      for (let bit = 0; bit < 8; bit += 1) {
        value = value & 1 ? 0xedb88320 ^ (value >>> 1) : value >>> 1;
      }
      return value >>> 0;
    });
  }

  const CRC32_TABLE = makeCrc32Table();
  const PNG_SIGNATURE = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]);
  const PNG_BAND_BYTES = 24 * 1024 * 1024;
  const MAX_STREAMED_PNG_BYTES = 1536 * 1024 * 1024;

  function updateCrc32(crc, bytes) {
    let value = crc;
    for (let index = 0; index < bytes.length; index += 1) {
      value = CRC32_TABLE[(value ^ bytes[index]) & 0xff] ^ (value >>> 8);
    }
    return value;
  }

  function createPngChunk(type, data = new Uint8Array()) {
    const typeBytes = new TextEncoder().encode(type);
    const buffer = new ArrayBuffer(12 + data.length);
    const view = new DataView(buffer);
    view.setUint32(0, data.length, false);
    const bytes = new Uint8Array(buffer);
    bytes.set(typeBytes, 4);
    bytes.set(data, 8);
    let crc = updateCrc32(0xffffffff, typeBytes);
    crc = updateCrc32(crc, data);
    view.setUint32(8 + data.length, (crc ^ 0xffffffff) >>> 0, false);
    return buffer;
  }

  function createPngHeader(width, height) {
    const data = new Uint8Array(13);
    const view = new DataView(data.buffer);
    view.setUint32(0, width, false);
    view.setUint32(4, height, false);
    data[8] = 8;
    data[9] = 2;
    data[10] = 0;
    data[11] = 0;
    data[12] = 0;
    return createPngChunk("IHDR", data);
  }

  function getPngBandHeight(width, remainingHeight) {
    const rowBytes = width * 3 + 1;
    return Math.max(1, Math.min(remainingHeight, Math.floor(PNG_BAND_BYTES / rowBytes)));
  }

  function copyTileToScanlines(imageData, scanlines, fullWidth, tileX, tileWidth, bandHeight) {
    const source = imageData.data;
    const rowStride = fullWidth * 3 + 1;
    for (let y = 0; y < bandHeight; y += 1) {
      let sourceOffset = y * tileWidth * 4;
      let targetOffset = y * rowStride + 1 + tileX * 3;
      for (let x = 0; x < tileWidth; x += 1) {
        scanlines[targetOffset] = source[sourceOffset];
        scanlines[targetOffset + 1] = source[sourceOffset + 1];
        scanlines[targetOffset + 2] = source[sourceOffset + 2];
        sourceOffset += 4;
        targetOffset += 3;
      }
    }
  }

  function applyPngPaethFilter(scanlines, width, height, previousRow = null) {
    const pixelBytes = width * 3;
    const rowStride = pixelBytes + 1;
    let prior = previousRow || new Uint8Array(pixelBytes);
    let current = new Uint8Array(pixelBytes);

    for (let y = 0; y < height; y += 1) {
      const rowStart = y * rowStride;
      current.set(scanlines.subarray(rowStart + 1, rowStart + rowStride));
      scanlines[rowStart] = 4;
      for (let x = 0; x < pixelBytes; x += 1) {
        const left = x >= 3 ? current[x - 3] : 0;
        const up = prior[x];
        const upLeft = x >= 3 ? prior[x - 3] : 0;
        scanlines[rowStart + 1 + x] =
          (current[x] - getPngPaethPredictor(left, up, upLeft)) & 0xff;
      }
      const swap = prior;
      prior = current;
      current = swap;
    }

    return prior;
  }

  function getPngPaethPredictor(left, up, upLeft) {
    const prediction = left + up - upLeft;
    const leftDistance = Math.abs(prediction - left);
    const upDistance = Math.abs(prediction - up);
    const upLeftDistance = Math.abs(prediction - upLeft);
    if (leftDistance <= upDistance && leftDistance <= upLeftDistance) return left;
    return upDistance <= upLeftDistance ? up : upLeft;
  }

  async function renderPngBandRaw(items, options, layout, bandY, bandHeight) {
    const rowBytes = layout.canvasW * 3 + 1;
    const scanlines = new Uint8Array(rowBytes * bandHeight);
    const previousCanvas = activeCanvas;
    const previousCtx = ctx;
    const blurBleed = options.backgroundEnabled
      ? Math.ceil(options.backgroundBlurPx * 3 + 2)
      : 0;
    for (let x = 0; x < layout.canvasW; x += EXPORT_TILE_SIDE) {
      if (state.exportCancelled) throw new DOMException("Export cancelled", "AbortError");
      const tileWidth = Math.min(EXPORT_TILE_SIDE, layout.canvasW - x);
      const renderX = Math.max(0, x - blurBleed);
      const renderY = Math.max(0, bandY - blurBleed);
      const renderRight = Math.min(layout.canvasW, x + tileWidth + blurBleed);
      const renderBottom = Math.min(layout.canvasH, bandY + bandHeight + blurBleed);
      const renderBounds = {
        x: renderX,
        y: renderY,
        width: renderRight - renderX,
        height: renderBottom - renderY,
      };
      const canvas = document.createElement("canvas");
      const tileCtx = canvas.getContext("2d", { willReadFrequently: true });
      if (!tileCtx) throw new Error("Canvas 2D context unavailable");
      activeCanvas = canvas;
      ctx = tileCtx;
      try {
        drawLayout(items, options, layout, renderBounds);
        const pixels = tileCtx.getImageData(x - renderX, bandY - renderY, tileWidth, bandHeight);
        copyTileToScanlines(pixels, scanlines, layout.canvasW, x, tileWidth, bandHeight);
      } finally {
        activeCanvas = previousCanvas;
        ctx = previousCtx;
        canvas.width = 1;
        canvas.height = 1;
      }
    }
    return scanlines;
  }

  async function exportStreamedPng(items, options, layout, sizeLabel) {
    if (typeof CompressionStream !== "function") {
      throw new Error("PNG_STREAM_UNSUPPORTED");
    }
    if (
      layout.canvasW > PNG_MAX_DIMENSION ||
      layout.canvasH > PNG_MAX_DIMENSION ||
      !Number.isSafeInteger(layout.canvasW * layout.canvasH)
    ) {
      throw new Error("PNG_DIMENSIONS_TOO_LARGE");
    }

    const compression = new CompressionStream("deflate");
    const writer = compression.writable.getWriter();
    const reader = compression.readable.getReader();
    const pngParts = [PNG_SIGNATURE, createPngHeader(layout.canvasW, layout.canvasH)];
    let pngBytes = PNG_SIGNATURE.byteLength + 25;
    let previousRow = null;
    const consumeCompressed = (async () => {
      while (true) {
        if (state.exportCancelled) throw new DOMException("Export cancelled", "AbortError");
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = createPngChunk("IDAT", value);
        pngParts.push(chunk);
        pngBytes += chunk.byteLength;
        if (pngBytes > MAX_STREAMED_PNG_BYTES) throw new Error("PNG_FILE_TOO_LARGE");
      }
    })();

    exportButton.disabled = false;
    try {
      for (let y = 0; y < layout.canvasH;) {
        if (state.exportCancelled) throw new DOMException("Export cancelled", "AbortError");
        const bandHeight = getPngBandHeight(layout.canvasW, layout.canvasH - y);
        const percent = Math.floor((y / layout.canvasH) * 100);
        exportButton.textContent = `取消导出（${percent}%）`;
        statusTitle.textContent = `正在无损压缩原图级 PNG ${percent}%`;
        const scanlines = await renderPngBandRaw(items, options, layout, y, bandHeight);
        previousRow = applyPngPaethFilter(scanlines, layout.canvasW, bandHeight, previousRow);
        await writer.write(scanlines);
        y += bandHeight;
        await new Promise((resolve) => window.setTimeout(resolve, 0));
      }
      await writer.close();
      await consumeCompressed;
      if (state.exportCancelled) throw new DOMException("Export cancelled", "AbortError");
      pngParts.push(createPngChunk("IEND"));
      const blob = new Blob(pngParts, { type: "image/png" });
      if (blob.size > MAX_STREAMED_PNG_BYTES) throw new Error("PNG_FILE_TOO_LARGE");
      const pagePart = getExportPageFilenamePart(layout.pagePreset);
      const filename = ["film-index", pagePart, new Date().toISOString().slice(0, 10), "full-resolution"]
        .filter(Boolean)
        .join("-");
      downloadBlob(blob, `${filename}.png`);
      showNotice(`原图级索引图已拼接为一张 ${sizeLabel} 像素的 PNG`);
    } catch (error) {
      try {
        await writer.abort(error);
      } catch {}
      try {
        await reader.cancel(error);
      } catch {}
      throw error;
    }
  }

  function canvasToBlob(canvas, mimeType, quality) {
    return new Promise((resolve, reject) => {
      try {
        canvas.toBlob((blob) => {
          if (blob) resolve(blob);
          else reject(new Error("CANVAS_ENCODING_FAILED"));
        }, mimeType, quality);
      } catch (error) {
        reject(error);
      }
    });
  }

  function downloadBlob(blob, filename) {
    const link = document.createElement("a");
    const objectUrl = URL.createObjectURL(blob);
    link.href = objectUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
  }

  function getExportFailureMessage(stage, isFullResolution, sizeLabel) {
    if (!isFullResolution) {
      return stage === "draw"
        ? "导出失败：浏览器无法创建该尺寸画布，请降低输出质量或尺寸基准后重试"
        : "导出失败：浏览器无法编码该尺寸画布，请降低输出质量或尺寸基准";
    }
    return stage === "draw"
      ? `原图级导出失败：浏览器无法创建 ${sizeLabel} 像素的画布。请改用 3x、降低尺寸基准或减少照片数量后重试`
      : `原图级导出失败：浏览器无法编码 ${sizeLabel} 像素的画布。请改用 3x 或降低尺寸基准`;
  }

  function setSourceEditingLocked(locked) {
    frameAspect.disabled = locked;
    wideSpecSelect.disabled = locked || !is135WideFormat();
    backgroundStyle.disabled = locked;
    backgroundBlur.disabled = locked || backgroundStyle.value !== "blur";
    halfFrameModeInputs.forEach((control) => {
      control.disabled = locked || frameAspect.value !== "half";
    });
  }

  async function exportIndexImage() {
    const originalButtonText = exportButton.textContent;
    const originalButtonDisabled = exportButton.disabled;
    state.isExporting = true;
    state.exportCancelled = false;
    setSourceEditingLocked(true);
    state.exportHydrationItems = [...state.items];
    exportButton.textContent = "取消原图下载";

    try {
      const failures = await ensureAllOriginals(state.exportHydrationItems, "导出准备");
      state.exportHydrationItems = null;
      if (failures.length) {
        const names = failures.slice(0, 3).map(({ item }) => item.name).join("、");
        showNotice(`导出已取消：${failures.length} 张原图获取失败${names ? `（${names}）` : ""}`);
        render();
        return;
      }
      if (state.items.some((item) => item.remote && item.remote.quality !== "full")) {
        showNotice("导出已取消：仍有照片未获取原图");
        render();
        return;
      }

      render();
      exportButton.textContent = "正在导出...";
      exportButton.disabled = true;
      const isFullResolution = exportScale.value === "full";
      const scale = isFullResolution
        ? getFullResolutionScale(state.items)
        : clamp(Number(exportScale.value) || 1, 1, 3);
      if (!Number.isFinite(scale) || scale <= 0) {
        showNotice("导出失败：无法计算有效的输出尺寸");
        return;
      }

      const exportLayout = getExportRenderLayout(state.items.length, scale);
      const { options, pageLayout: layout } = exportLayout;
      const sizeLabel = `${layout.canvasW.toLocaleString()} × ${layout.canvasH.toLocaleString()}`;

      // 预估内存占用：RGBA 原始像素 + 编码缓冲（约 1.5–2 倍）
      // 分页导出时每页独立画布，峰值按单页估算
      const perPageExport = layout.pageRects && layout.pageRects.length > 1 && !options.a4Merge;
      const estimatedPixelBytes = perPageExport
        ? layout.canvasW * options.a4PageH * 4
        : layout.canvasW * layout.canvasH * 4;
      const estimatedPeakBytes = estimatedPixelBytes * 2;
      const estimatedPeakMB = Math.round(estimatedPeakBytes / 1024 / 1024);
      const memoryWarningThreshold = 500 * 1024 * 1024; // 500MB 阈值

      if (estimatedPeakBytes > memoryWarningThreshold) {
        showNotice(
          `导出约需 ${estimatedPeakMB}MB 内存，如遇闪退请降低导出质量或减少照片数量`,
          5000,
        );
      }

      const exceedsCanvasLimit =
        !Number.isFinite(layout.canvasW) ||
        !Number.isFinite(layout.canvasH) ||
        layout.canvasW <= 0 ||
        layout.canvasH <= 0 ||
        layout.canvasW > MAX_CANVAS_SIDE ||
        layout.canvasH > MAX_CANVAS_SIDE ||
        layout.canvasW * layout.canvasH > MAX_CANVAS_AREA;
      const items = getSortedItems();
      const mimeType = isFullResolution ? "image/png" : formatSelect.value;
      const quality = Number(jpgQuality.value) / 100;
      const extension = mimeType === "image/jpeg" ? "jpg" : "png";

      // A4 真实尺寸「分页导出」：每页独立画布、逐文件下载（单页尺寸固定，不受页数影响）
      if (layout.pageRects && layout.pageRects.length > 1 && !options.a4Merge) {
        await exportA4RealPages(items, options, layout, mimeType, quality, extension, isFullResolution);
        return;
      }

      if (exceedsCanvasLimit) {
        if (!isFullResolution) {
          showNotice(`导出尺寸为 ${sizeLabel} 像素，超过浏览器画布上限，请降低输出质量或尺寸基准后重试`);
          return;
        }
        await exportStreamedPng(items, options, layout, sizeLabel);
        return;
      }

      const previousCanvas = activeCanvas;
      const previousCtx = ctx;
      let outputCanvas;

      try {
        outputCanvas = document.createElement("canvas");
        const outputCtx = outputCanvas.getContext("2d");
        if (!outputCtx) throw new Error("Canvas 2D context unavailable");
        activeCanvas = outputCanvas;
        ctx = outputCtx;
        drawLayout(items, options, layout);
      } catch (error) {
        console.error("导出画布绘制失败", error);
        showNotice(getExportFailureMessage("draw", isFullResolution, sizeLabel));
        return;
      } finally {
        activeCanvas = previousCanvas;
        ctx = previousCtx;
      }

      try {
        const blob = await canvasToBlob(outputCanvas, mimeType, quality);
        const pagePart = getExportPageFilenamePart();
        const filename = ["film-index", pagePart, new Date().toISOString().slice(0, 10)]
          .filter(Boolean)
          .join("-");
        downloadBlob(blob, `${filename}.${extension}`);
      } catch (error) {
        console.error("导出画布编码失败", error);
        showNotice(getExportFailureMessage("encode", isFullResolution, sizeLabel));
      }
    } catch (error) {
      if (error.name === "AbortError") {
        showNotice("原图级 PNG 导出已取消");
      } else if (error.message === "PNG_STREAM_UNSUPPORTED") {
        showNotice("当前浏览器不支持超大 PNG 流式编码，请更新浏览器或改用 3x 导出");
      } else if (error.message === "PNG_DIMENSIONS_TOO_LARGE" || error.message === "PNG_FILE_TOO_LARGE") {
        showNotice("原图级 PNG 尺寸或体积过大，请降低尺寸基准、减少照片或改用 3x 导出");
      } else {
        console.error("导出失败", error);
        showNotice("原图级 PNG 拼接失败，请降低尺寸基准、减少照片或改用 3x 后重试");
      }
    } finally {
      state.isExporting = false;
      state.exportCancelled = false;
      state.exportHydrationItems = null;
      setSourceEditingLocked(false);
      updateFrameModeControls();
      updateExportFormatControls();
      exportButton.textContent = originalButtonText;
      exportButton.disabled = originalButtonDisabled;
      render();
    }
  }

  // 「A4 竖向（真实底片尺寸）」：以 300dpi 基准锁定 A4 页面（210mm = 2480px），
  // 135 标准帧按 36 × 24 mm 原大排印，打印即与真实底片 1:1 对应。
  // 帧宽/列数不受侧栏控制：列数由页面内容宽自动最大化，行数按页高自动分页。
  const A4_REAL_PAGE_SHORT = 2480;
  const A4_REAL_MM_W = 210;
  const A4_REAL_MM_H = 297;

  // 分页导出：逐页以 tile 子区域绘制（drawLayout 会把画布设为 tile 尺寸并平移），
  // 每页单独编码下载，文件名带 page{N}of{M}。
  async function exportA4RealPages(items, options, layout, mimeType, quality, extension, isFullResolution) {
    const rects = layout.pageRects;
    // 原图级导出 scale 可能极大：分页模式按单页尺寸检查画布上限
    const exceedsPageLimit = rects.some(
      (rect) =>
        rect.w > MAX_CANVAS_SIDE ||
        rect.h > MAX_CANVAS_SIDE ||
        rect.w * rect.h > MAX_CANVAS_AREA,
    );
    if (exceedsPageLimit) {
      showNotice(
        `单页尺寸 ${rects[0].w.toLocaleString()} × ${rects[0].h.toLocaleString()} 像素超过浏览器画布上限，请降低输出质量后重试`,
      );
      return;
    }
    const previousCanvas = activeCanvas;
    const previousCtx = ctx;
    const pagePart = getExportPageFilenamePart();
    const datePart = new Date().toISOString().slice(0, 10);
    const total = rects.length;
    let done = 0;
    try {
      for (let i = 0; i < total; i += 1) {
        if (state.exportCancelled) {
          showNotice("分页导出已取消");
          return;
        }
        const rect = rects[i];
        exportButton.textContent = `正在导出 ${i + 1}/${total} 页...`;
        const outputCanvas = document.createElement("canvas");
        const outputCtx = outputCanvas.getContext("2d");
        if (!outputCtx) throw new Error("Canvas 2D context unavailable");
        activeCanvas = outputCanvas;
        ctx = outputCtx;
        try {
          drawLayout(items, options, layout, { x: rect.x, y: rect.y, width: rect.w, height: rect.h });
        } finally {
          activeCanvas = previousCanvas;
          ctx = previousCtx;
        }
        const blob = await canvasToBlob(outputCanvas, mimeType, quality);
        downloadBlob(
          blob,
          ["film-index", pagePart, datePart, `page${i + 1}of${total}`].filter(Boolean).join("-") +
            `.${extension}`,
        );
        outputCanvas.width = 0;
        outputCanvas.height = 0;
        done += 1;
        // 让出主线程，避免连续多页编码卡住 UI / 触发浏览器拦截多文件下载
        await new Promise((resolve) => window.setTimeout(resolve, 120));
      }
      showNotice(`已导出 ${done} 个分页文件`);
    } catch (error) {
      console.error("分页导出失败", error);
      showNotice(getExportFailureMessage(done ? "encode" : "draw", isFullResolution, `${layout.canvasW} × ${options.a4PageH}`));
    }
  }

  // 零依赖 PDF-1.4 生成器：pages = [{ jpegBytes, wPt, hPt }]，每页一张 DCTDecode JPEG 满页铺放。
  // xref 表各行严格 20 字节（含 \r\n），否则阅读器解析失败。
  function buildPdfDocument(pages) {
    const encoder = new TextEncoder();
    const chunks = [];
    const offsets = [];
    let length = 0;
    const push = (data) => {
      const bytes = typeof data === "string" ? encoder.encode(data) : data;
      chunks.push(bytes);
      length += bytes.length;
    };
    const beginObj = (id) => {
      offsets[id] = length;
      push(`${id} 0 obj\n`);
    };

    push("%PDF-1.4\n%\xE2\xE3\xCF\xD3\n");
    const pageCount = pages.length;
    const catalogId = 1;
    const pagesId = 2;
    const firstPageId = 3;

    beginObj(catalogId);
    push(`<< /Type /Catalog /Pages ${pagesId} 0 R >>\nendobj\n`);

    beginObj(pagesId);
    const kids = pages.map((_, i) => `${firstPageId + i * 3} 0 R`).join(" ");
    push(`<< /Type /Pages /Count ${pageCount} /Kids [ ${kids} ] >>\nendobj\n`);

    pages.forEach((page, i) => {
      const pageId = firstPageId + i * 3;
      const imageId = pageId + 1;
      const contentId = pageId + 2;
      const w = page.wPt.toFixed(2);
      const h = page.hPt.toFixed(2);
      beginObj(pageId);
      push(
        `<< /Type /Page /Parent ${pagesId} 0 R /MediaBox [0 0 ${w} ${h}] ` +
          `/Resources << /XObject << /Im0 ${imageId} 0 R >> >> /Contents ${contentId} 0 R >>\nendobj\n`,
      );
      beginObj(imageId);
      push(
        `<< /Type /XObject /Subtype /Image /Width ${page.pixelW} /Height ${page.pixelH} ` +
          `/ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${page.jpegBytes.length} >>\nstream\n`,
      );
      push(page.jpegBytes);
      push("\nendstream\nendobj\n");
      const content = `q\n${w} 0 0 ${h} 0 0 cm\n/Im0 Do\nQ\n`;
      beginObj(contentId);
      push(`<< /Length ${encoder.encode(content).length} >>\nstream\n${content}endstream\nendobj\n`);
    });

    const xrefStart = length;
    const objCount = firstPageId + pageCount * 3;
    push(`xref\n0 ${objCount}\n`);
    push("0000000000 65535 f\r\n");
    for (let id = 1; id < objCount; id += 1) {
      push(`${String(offsets[id]).padStart(10, "0")} 00000 n\r\n`);
    }
    push(
      `trailer\n<< /Size ${objCount} /Root ${catalogId} 0 R >>\nstartxref\n${xrefStart}\n%%EOF\n`,
    );

    const out = new Uint8Array(length);
    let cursor = 0;
    chunks.forEach((chunk) => {
      out.set(chunk, cursor);
      cursor += chunk.length;
    });
    return new Blob([out], { type: "application/pdf" });
  }

  // 「导出PDF」：按所选 DPI（150/300/600）以 300dpi 基准换算 scale 复用排版管线，
  // 逐页渲染 JPEG 后嵌入 PDF，页面 MediaBox 固定 210 × 297 mm（595.28 × 841.89 pt）。
  async function exportIndexPdf() {
    const originalText = exportModalPdf.textContent;
    const originalDisabled = exportModalPdf.disabled;
    state.isExporting = true;
    state.exportCancelled = false;
    setSourceEditingLocked(true);
    state.exportHydrationItems = [...state.items];
    exportModalPdf.textContent = "取消原图下载";

    try {
      const failures = await ensureAllOriginals(state.exportHydrationItems, "导出准备");
      state.exportHydrationItems = null;
      if (failures.length) {
        const names = failures.slice(0, 3).map(({ item }) => item.name).join("、");
        showNotice(`导出已取消：${failures.length} 张原图获取失败${names ? `（${names}）` : ""}`);
        render();
        return;
      }
      if (state.items.some((item) => item.remote && item.remote.quality !== "full")) {
        showNotice("导出已取消：仍有照片未获取原图");
        render();
        return;
      }

      render();
      exportModalPdf.disabled = true;
      const dpi = clamp(Math.round(Number(a4RealPdfDpi.value) || 300), 1, 1200);
      const scale = dpi / 300;
      const exportLayout = getExportRenderLayout(state.items.length, scale, "a4-real");
      const { options, pageLayout: layout } = exportLayout;
      const rects = layout.pageRects;
      if (!rects || !rects.length) {
        showNotice("导出失败：无法计算 PDF 分页");
        return;
      }
      const items = getSortedItems();
      const previousCanvas = activeCanvas;
      const previousCtx = ctx;
      const pages = [];
      try {
        for (let i = 0; i < rects.length; i += 1) {
          if (state.exportCancelled) {
            showNotice("PDF 导出已取消");
            return;
          }
          const rect = rects[i];
          exportModalPdf.textContent = `正在生成 ${i + 1}/${rects.length} 页...`;
          const outputCanvas = document.createElement("canvas");
          const outputCtx = outputCanvas.getContext("2d");
          if (!outputCtx) throw new Error("Canvas 2D context unavailable");
          activeCanvas = outputCanvas;
          ctx = outputCtx;
          try {
            drawLayout(items, options, layout, { x: rect.x, y: rect.y, width: rect.w, height: rect.h });
          } finally {
            activeCanvas = previousCanvas;
            ctx = previousCtx;
          }
          const blob = await canvasToBlob(outputCanvas, "image/jpeg", 0.95);
          pages.push({
            jpegBytes: new Uint8Array(await blob.arrayBuffer()),
            pixelW: outputCanvas.width,
            pixelH: outputCanvas.height,
            wPt: (A4_REAL_MM_W / 25.4) * 72,
            hPt: (A4_REAL_MM_H / 25.4) * 72,
          });
          outputCanvas.width = 0;
          outputCanvas.height = 0;
        }
      } catch (error) {
        console.error("PDF 页面渲染失败", error);
        showNotice("PDF 导出失败：页面渲染出错，请降低 DPI 后重试");
        return;
      }

      exportModalPdf.textContent = "正在封装 PDF...";
      const pdfBlob = buildPdfDocument(pages);
      const datePart = new Date().toISOString().slice(0, 10);
      downloadBlob(pdfBlob, `film-index-a4-real-${dpi}dpi-${datePart}.pdf`);
      showNotice(`已导出 PDF（${rects.length} 页 · ${dpi} DPI）`);
    } catch (error) {
      if (error.name === "AbortError") {
        showNotice("PDF 导出已取消");
      } else {
        console.error("PDF 导出失败", error);
        showNotice("PDF 导出失败，请降低 DPI 后重试");
      }
    } finally {
      state.isExporting = false;
      state.exportCancelled = false;
      state.exportHydrationItems = null;
      setSourceEditingLocked(false);
      updateFrameModeControls();
      updateExportFormatControls();
      exportModalPdf.textContent = originalText;
      exportModalPdf.disabled = originalDisabled;
      render();
    }
  }


  function isA4RealPreset() {
    return exportPagePreset.value === "a4-real";
  }

  function isA4RealActive() {
    return isA4RealPreset() && !is120Format();
  }

  // a4-real 模式下侧栏「尺寸基准 / 每行张数」被物理尺寸锁定，禁用并给出提示；
  // 切回其他预设时按画幅语义恢复（120 / 宽幅 / 裁切半格本就禁用列数）
  function syncA4RealControls() {
    const active = isA4RealActive();
    frameWidthInput.disabled = active;
    if (active) {
      columnsSelect.disabled = true;
      columnsHint.textContent = "A4 真实尺寸模式下每行列数由页面宽度自动决定";
      columnsHint.hidden = false;
      return;
    }
    if (!is120Format() && !is135WideFormat() && !isCroppedHalfFrameMode() && columnsSelect.disabled) {
      // 从 a4-real 切回：重算由画幅决定的列数控件状态（含提示文案）
      updateFrameModeControls();
    }
  }

  function getRenderOptions(scale, columnsOverride = null, frameWidthOverride = null) {
    // frameWidthOverride：「单张A4」自适应布局用（绕过侧栏 180–1200 的手动范围钳制）
    const hasFrameOverride = frameWidthOverride !== null;
    const rawFrameW = hasFrameOverride
      ? Number(frameWidthOverride) || 420
      : Number(frameWidthInput.value) || 420;
    const format = getFormat();
    // a4-real 仅 135 家族支持（120 条带宽度固定、与页面宽解耦，自动回退普通布局）
    const isA4Real = !hasFrameOverride && format.family !== "120" && isA4RealPreset();
    const baseFrameW = isA4Real
      ? Math.round(FILM_135.standardImageWidthMm * ((A4_REAL_PAGE_SHORT * scale) / A4_REAL_MM_W))
      : clamp(rawFrameW, hasFrameOverride ? 40 : 180, hasFrameOverride ? 6000 : 1200) * scale;
    const a4PageW = isA4Real ? Math.round(A4_REAL_PAGE_SHORT * scale) : 0;
    const a4PageH = isA4Real ? Math.round((a4PageW * A4_REAL_MM_H) / A4_REAL_MM_W) : 0;
    const ratio = format.ratio || 1.5;
    const is120 = format.family === "120";
    const isHalfFrame = isHalfFrameMode();
    const isCroppedHalfFrame = isCroppedHalfFrameMode();
    const isWide135 = format.family === "135" && Boolean(format.wide);
    const baseFrameH = Math.round(baseFrameW / 1.5);
    const pxPerMm135 = baseFrameW / FILM_135.standardImageWidthMm;
    const slotH = is120 ? Math.round(baseFrameW / ratio) : baseFrameH;
    const normalGap = is120
      ? Math.round(slotH * TUNE.gap120)
      : Math.max(10 * scale, Math.round(pxPerMm135 * 2));
    const minimumColumns = isHalfFrame && !isCroppedHalfFrame ? 4 : 2;
    const requestedColumns = columnsOverride === null
      ? Number(columnsSelect.value) || 6
      : Number(columnsOverride);
    const selectedColumns = clamp(requestedColumns, minimumColumns, 8);
    const normalSixFrameAreaW = 6 * baseFrameW + 5 * normalGap;
    const wideSlotW = Math.round(format.imageWidthMm * pxPerMm135);
    const slotW = isCroppedHalfFrame ? baseFrameW / 2 : isWide135 ? wideSlotW : baseFrameW;
    // a4-real：列数按 A4 页面内容宽自动最大化（间距沿用 sheetPad/stripPadX/margin135 现有公式）
    let a4RealColumns = 0;
    if (isA4Real) {
      const a4SheetPad = Math.round(baseFrameW * 0.18);
      const a4StripPadX = Math.round(baseFrameW * 0.085);
      const a4ContentW = a4PageW - 2 * (a4SheetPad + a4StripPadX + baseFrameW * TUNE.margin135);
      a4RealColumns = Math.max(1, Math.floor((a4ContentW + normalGap) / (slotW + normalGap)));
    }
    const slotCount = isA4Real
      ? a4RealColumns
      : isCroppedHalfFrame
        ? 12
        : is120
          ? format.columns
          : isWide135
            ? Math.max(1, Math.floor((normalSixFrameAreaW + normalGap) / (slotW + normalGap)))
            : selectedColumns;
    const slotGap = isCroppedHalfFrame && !isA4Real
      ? (normalSixFrameAreaW - slotCount * slotW) / (slotCount - 1)
      : normalGap;
    const frameAreaW = isA4Real
      ? slotCount * slotW + (slotCount - 1) * slotGap
      : isWide135 || isCroppedHalfFrame
        ? normalSixFrameAreaW
        : slotCount * slotW + (slotCount - 1) * slotGap;

    const stock = resolveStock(getActiveStock());
    const hasEdgeText = showEdgeText.checked && Boolean(stock.edgeText);
    const showSprocketHoles = showSprockets.checked && (!is120 || stock.sprocketsIn120);

    let sprocketH;
    let textH;
    let textSprocketShift;
    let bandH;
    let stripPadX;
    let sprocketPitch;
    let sprocketHoleW;
    if (is120) {
      sprocketH = showSprocketHoles ? Math.round(slotH * 0.09) : 0;
      textH = Math.round(slotH * TUNE.band120);
      textSprocketShift = showSprocketHoles
        ? Math.min(Math.round(slotH * TUNE.textSprocketGap120), textH)
        : 0;
      bandH = Math.max(sprocketH + textH - textSprocketShift, Math.round(slotH * 0.02));
      stripPadX = Math.round(slotH * 0.05);
      sprocketPitch = slotH * (4.75 / 56);
      sprocketHoleW = Math.round(slotH * (2.8 / 56));
    } else {
      const minimumBandH = Math.round(pxPerMm135 * (FILM_135.filmHeightMm - FILM_135.imageHeightMm) / 2);
      textH = Math.round(baseFrameW * TUNE.textH);
      sprocketH = Math.round(baseFrameW * TUNE.sprocketH);
      textSprocketShift = Math.min(Math.round(baseFrameW * TUNE.textSprocketGap), textH);
      bandH = Math.max(sprocketH + textH - textSprocketShift, minimumBandH);
      stripPadX = Math.round(baseFrameW * 0.085);
      sprocketPitch = pxPerMm135 * FILM_135.sprocketPitchMm;
      sprocketHoleW = Math.round(baseFrameW * TUNE.holeW);
    }

    const leaderAdvance = isCroppedHalfFrame
      ? 2 * (slotW + slotGap)
      : baseFrameW + normalGap;
    const leaderCapacity = isCroppedHalfFrame
      ? Math.max(1, slotCount - 2) // 非 a4-real 时 slotCount 恒为 12，代数恒等于旧的固定值 10
      : isWide135
        ? Math.max(1, Math.floor((frameAreaW - leaderAdvance + slotGap) / (slotW + slotGap)))
        : Math.max(1, slotCount - 1);
    const sheetPad = Math.round(baseFrameW * 0.18);
    const rowGap = Math.round(baseFrameW * 0.14);

    return {
      frameW: baseFrameW,
      frameH: slotH,
      baseFrameW,
      baseFrameH,
      ratio,
      gap: normalGap,
      slotW,
      slotH,
      slotGap,
      slotCount,
      normalCapacity: slotCount,
      leaderCapacity,
      frameAreaW,
      edgeMarkW: baseFrameW,
      edgeMarkGap: is120 ? normalGap : Math.max(0, pxPerMm135 * FILM_135.frameAdvanceMm - baseFrameW),
      edgeMarkSlotSpan: isCroppedHalfFrame ? 2 : 1,
      isHalfFrame,
      isCroppedHalfFrame,
      isWide135,
      is120,
      bandH,
      sprocketH,
      textH,
      textSprocketShift,
      sprocketPitch,
      sprocketHoleW,
      stripPadX,
      sheetPad,
      rowGap,
      a4PageW,
      a4PageH,
      // a4-real 导出方式：true = 合并成一张（页面无缝纵向堆叠），false = 分页导出（每页独立文件）
      a4Merge: a4RealMergeMode.value !== "pages",
      columns: slotCount,
      showEdgeText: hasEdgeText,
      showSprockets: showSprocketHoles,
      imageInSprockets: isWide135 && imageInSprockets.checked,
      imageInEdgeText: isWide135 && imageInEdgeText.checked,
      showLeader: showLeader.checked && !is120,
      leaderDirection: !is120 && leaderDirectionSelect && leaderDirectionSelect.value === "right" ? "right" : "left",
      showInfoBlock: showInfoBlockInput.checked,
      infoBlockTemplate: ["classic", "modern", "lines", "noir"].includes(infoBlockTemplateSelect.value)
        ? infoBlockTemplateSelect.value
        : "classic",
      infoBlockBg: ["glass", "follow", "paper", "white", "dark", "kraft", "parchment", "none"].includes(infoBlockBgSelect.value)
        ? infoBlockBgSelect.value
        : "glass",
      infoBlockWeights: infoBlockWeights.slice(),
      infoBlockCanisterSide: infoBlockCanisterSideSelect.value === "left" ? "left" : "right",
      infoBlockFeather: Boolean(infoBlockFeatherInput && infoBlockFeatherInput.checked),
      infoBlockRadius: clamp(Number(infoBlockRadiusInput && infoBlockRadiusInput.value) || 0, 0, 100),
      infoBlockFontWeight: clamp(Number(infoBlockFontSelect.value) || 600, 300, 900),
      infoBlockOpacity: clamp(Number(infoBlockOpacityInput.value) || 100, 10, 100) / 100,
      infoBlockBlurPx: clamp(Number(infoBlockBlurInput.value) || 0, 0, 40) * scale,
      infoBlockCanister: infoBlockCanisterImage,
      infoBlockCanisterScale: clamp(Number(infoBlockCanisterScale) || 1, CANISTER_SCALE_MIN, CANISTER_SCALE_MAX),
      backgroundMode: backgroundStyle.value,
      backgroundEnabled: backgroundStyle.value === "blur",
      backgroundBlurPx: clamp(Number(backgroundBlur.value) || 24, 8, 64) * scale,
      leaderW: baseFrameW + normalGap,
      leaderAdvance,
      stock,
    };
  }

  function buildRows(itemCount, options) {
    const rows = [];
    let index = 0;
    let rowIdx = 0;
    do {
      const leader = options.showLeader && rowIdx === 0;
      const capacity = leader ? options.leaderCapacity : options.normalCapacity;
      const count = Math.min(capacity, itemCount - index);
      const contentWidth = count
        ? count * options.slotW + (count - 1) * options.slotGap
        : 0;
      const usedWidth = (leader ? options.leaderAdvance : 0) + contentWidth;
      rows.push({
        start: index,
        count,
        capacity,
        leader,
        trailer: false,
        trimmed: false,
        usedWidth,
        stripW: options.stripPadX * 2 + usedWidth,
      });
      index += count;
      rowIdx += 1;
    } while (index < itemCount);
    const lastRow = rows[rows.length - 1];
    lastRow.trailer = options.showLeader;
    lastRow.trimmed = lastRow.count < lastRow.capacity;
    return rows;
  }

  function createExportPageLayout(contentLayout, preset = "free") {
    if (preset === "free") return contentLayout;

    const pageRatio = preset.endsWith("-landscape")
      ? Math.SQRT2
      : 1 / Math.SQRT2;
    const contentRatio = contentLayout.canvasW / contentLayout.canvasH;
    let canvasW = contentLayout.canvasW;
    let canvasH = contentLayout.canvasH;

    if (contentRatio > pageRatio) {
      canvasH = Math.ceil(canvasW / pageRatio);
    } else {
      canvasW = Math.ceil(canvasH * pageRatio);
    }

    return {
      ...contentLayout,
      canvasW,
      canvasH,
      // 页面居中偏移必须叠加内容自身的内部预留（信息区块高度），
      // 否则胶片行会叠在信息区块上（A4 + 区块遮挡 bug 的根因）
      contentX: Math.round((canvasW - contentLayout.canvasW) / 2) + (contentLayout.contentX || 0),
      contentY: Math.round((canvasH - contentLayout.canvasH) / 2) + (contentLayout.contentY || 0),
      contentW: contentLayout.canvasW,
      contentH: contentLayout.canvasH,
      pagePreset: preset,
    };
  }

  function getExportPageFilenamePart(preset = exportPagePreset.value) {
    return preset === "free" ? "" : preset;
  }

  // 「单张A4」：内容自适应单页排版。以 1000px 基准宽计算各列数候选的内容纵横比，
  // 选出铺满 A4 页面后照片最大的（方向 × 每行张数）组合，再按实际内容尺寸重算，
  // 纵向余量分配到行距 / 区块间距 / 页边，保证信息区块与全部胶片行完整显示在单页内。
  function getSingleA4Layout(itemCount, scale) {
    // A4 300dpi 短边 2480px × 输出倍率；钳制保证单页不超过画布上限（长边 ≤16384）
    const scaleNum = clamp(Number(scale) || 1, 1, 4);
    const pageShort = Math.round(2480 * scaleNum);
    const orientations = [
      { pageW: pageShort, pageH: Math.round(pageShort * Math.SQRT2) },
      // 勾选「以 A4 横向输出」才让横向候选参与评分；未勾选默认竖向输出
      ...(a4SingleLandscape.checked
        ? [{ pageW: Math.round(pageShort * Math.SQRT2), pageH: pageShort }]
        : []),
    ];
    const UNIT_W = 1000;
    const columnChoices = getAdaptiveExportColumns() || [null];

    let best = null;
    orientations.forEach(({ pageW, pageH }) => {
      columnChoices.forEach((columnsOverride) => {
        const unitOptions = getRenderOptions(1, columnsOverride, UNIT_W);
        const unitLayout = computeLayout(itemCount, unitOptions);
        // 铺满页面所需的收缩系数（越小 → 最终照片越大）
        const fit = Math.max(unitLayout.canvasW / pageW, unitLayout.canvasH / pageH);
        const lastRow = unitLayout.rows[unitLayout.rows.length - 1];
        const score = [
          fit,
          lastRow.capacity > 0 ? (lastRow.capacity - lastRow.count) / lastRow.capacity : 0,
          unitLayout.rows.length,
          -unitOptions.columns,
        ];
        if (!best || isBetterExportLayout(score, best.score)) {
          best = { score, columnsOverride, pageW, pageH };
        }
      });
    });

    // 按最佳候选重建实际尺寸；取整/最小间距底线可能造成微溢出，逐步回退收缩系数
    let fitInverse = 1 / best.score[0];
    let options = null;
    let layout = null;
    for (let attempt = 0; attempt < 5; attempt += 1) {
      options = getRenderOptions(1, best.columnsOverride, UNIT_W * fitInverse);
      layout = computeLayout(itemCount, options);
      if (layout.canvasW <= best.pageW && layout.canvasH <= best.pageH) break;
      fitInverse *= 0.985;
    }

    // 纵向余量分配：行距（含信息区块与胶片间距）与上下页边同步增加，
    // 每档增幅不超过半个帧宽，剩余余量交由页面居中，避免稀疏排版
    const extraH = best.pageH - layout.canvasH;
    if (extraH > 1) {
      const gapSlots = (layout.rows.length - 1) + (options.showInfoBlock ? 1 : 0) + 2;
      const perGap = Math.min(extraH / gapSlots, options.frameW * 0.5);
      options.rowGap += perGap;
      options.sheetPad += perGap;
      layout = computeLayout(itemCount, options);
    }

    const pageLayout = {
      ...layout,
      canvasW: best.pageW,
      canvasH: best.pageH,
      contentX: Math.round((best.pageW - layout.canvasW) / 2) + (layout.contentX || 0),
      contentY: Math.round((best.pageH - layout.canvasH) / 2) + (layout.contentY || 0),
      contentW: layout.canvasW,
      contentH: layout.canvasH,
      pagePreset: "a4-single",
    };
    return { columnsOverride: best.columnsOverride, options, contentLayout: layout, pageLayout, score: best.score };
  }

  function getAdaptiveExportColumns() {
    if (isCroppedHalfFrameMode() || is120Format() || is135WideFormat()) return null;
    const minimum = isHalfFrameMode() ? 4 : 2;
    return Array.from({ length: 9 - minimum }, (_, index) => minimum + index);
  }

  function scoreExportLayout(options, contentLayout, pageLayout) {
    const contentArea = contentLayout.canvasW * contentLayout.canvasH;
    const pageArea = pageLayout.canvasW * pageLayout.canvasH;
    const lastRow = contentLayout.rows[contentLayout.rows.length - 1];
    return [
      (pageArea - contentArea) / contentArea,
      lastRow.capacity > 0 ? (lastRow.capacity - lastRow.count) / lastRow.capacity : 0,
      contentLayout.rows.length,
      -(options.slotW * options.slotH),
      -options.columns,
    ];
  }

  function isBetterExportLayout(score, bestScore) {
    if (!bestScore) return true;
    const epsilon = 1e-9;
    for (let index = 0; index < score.length; index += 1) {
      const difference = score[index] - bestScore[index];
      if (Math.abs(difference) <= epsilon) continue;
      return difference < 0;
    }
    return false;
  }

  function getExportRenderLayout(itemCount, scale, preset = exportPagePreset.value) {
    if (preset === "a4-real") {
      // 120 画幅条带宽度固定、与页面宽解耦，无法按真实尺寸排进 A4 页面——自动回退当前比例
      if (is120Format()) {
        const fallbackOptions = getRenderOptions(scale);
        const fallbackLayout = computeLayout(itemCount, fallbackOptions);
        return { columnsOverride: null, options: fallbackOptions, contentLayout: fallbackLayout, pageLayout: fallbackLayout, score: null };
      }
      // 布局即最终页面：computeLayout 已按 a4-real 固定帧宽并分页（canvasW/H = 页面堆叠尺寸）
      const options = getRenderOptions(scale);
      const contentLayout = computeLayout(itemCount, options);
      return { columnsOverride: null, options, contentLayout, pageLayout: contentLayout, score: null };
    }
    if (preset === "a4-single") return getSingleA4Layout(itemCount, scale);
    const candidates = preset === "free" ? null : getAdaptiveExportColumns();
    const columnChoices = candidates || [null];
    let best = null;

    columnChoices.forEach((columnsOverride) => {
      const options = getRenderOptions(scale, columnsOverride);
      const contentLayout = computeLayout(itemCount, options);
      const pageLayout = createExportPageLayout(contentLayout, preset);
      const score = scoreExportLayout(options, contentLayout, pageLayout);
      if (!best || isBetterExportLayout(score, best.score)) {
        best = { columnsOverride, options, contentLayout, pageLayout, score };
      }
    });

    return best;
  }

  function computeLayout(itemCount, options) {
    const rows = buildRows(itemCount, options);
    const outerMargin = options.is120
      ? options.slotH * TUNE.margin120
      : options.frameW * TUNE.margin135;
    const frameAreaW = options.frameAreaW;
    const stripW = frameAreaW + options.stripPadX * 2 + outerMargin * 2;
    const stripH = options.bandH * 2 + options.slotH;
    const contentCanvasW = Math.round(stripW + options.sheetPad * 2);
    let contentY = 0;
    let blockH = 0;
    if (options.showInfoBlock) {
      // 顶部信息区块：以 135 画幅为基准（高度约一个帧位）。
      // 120 画幅（6×6 / 6×9 / 6×4.5 等）画布更窄，若沿用 135 高度会导致字体溢出字段框——
      // 此时按「同 frameW 下 135 布局的画布宽」等比缩放区块与间距，观感与 135 一致；其他画幅行为不变。
      const refBlockH = Math.round(options.frameW * 1.02);
      blockH = refBlockH;
      let blockGap = options.rowGap;
      if (options.is120) {
        const px135 = options.frameW / FILM_135.standardImageWidthMm;
        const gap135 = Math.max(10, Math.round(px135 * 2));
        const stripPad135 = Math.round(options.frameW * 0.085);
        const margin135 = options.frameW * TUNE.margin135;
        const canvasW135 = 6 * options.frameW + 5 * gap135 + stripPad135 * 2 + margin135 * 2 + options.sheetPad * 2;
        blockH = Math.max(24, Math.min(refBlockH, Math.round((contentCanvasW / canvasW135) * refBlockH)));
        blockGap = Math.max(6, Math.round(blockH * (options.rowGap / refBlockH)));
      }
      contentY = blockH + blockGap;
    }

    if (options.a4PageW > 0) {
      // 「A4 竖向（真实底片尺寸）」分页布局：
      // 行是不可跨页的原子单元；首页扣除信息区块预留，其余页按页高 - 上下页边容纳；
      // 行 y（含页偏移）记入 rowOffsets，绘制 / 拖拽命中 / 插入指示三处共用；
      // 合并模式（a4Merge）页间零缝隙（长图直连），分页模式留 pageGap 工作台缝隙。
      const pageGap = options.a4Merge ? 0 : Math.round(options.frameW * 0.3);
      const rowStride = stripH + options.rowGap;
      const rowOffsets = [];
      let pageIndex = 0;
      let cursorY = options.sheetPad + contentY;
      for (let index = 0; index < rows.length; index += 1) {
        if (index > 0 && cursorY + stripH > options.a4PageH - options.sheetPad) {
          pageIndex += 1;
          cursorY = options.sheetPad;
        }
        rowOffsets.push(cursorY + pageIndex * (options.a4PageH + pageGap));
        cursorY += rowStride;
      }
      const pages = pageIndex + 1;
      const canvasW = options.a4PageW;
      const canvasH = pages * options.a4PageH + (pages - 1) * pageGap;
      // 与「单张A4」一致的居中逻辑：区块宽 = 内容条带宽（stripW），
      // 内容盒（stripW + 两侧 sheetPad）整页居中——普通布局下 canvasW = stripW + 2×sheetPad
      // 恰好满足 canvasW - 2×sheetPad = stripW，两者代数恒等。
      const infoBlockRect = options.showInfoBlock
        ? {
            x: options.sheetPad,
            y: options.sheetPad - contentY,
            w: stripW,
            h: blockH,
          }
        : null;
      return {
        rows,
        stripW,
        stripH,
        canvasW,
        canvasH,
        outerMargin,
        contentY,
        contentX: Math.max(0, Math.round((canvasW - stripW - options.sheetPad * 2) / 2)),
        infoBlockRect,
        rowOffsets,
        pageGap,
        pageRects: Array.from({ length: pages }, (_, page) => ({
          x: 0,
          y: page * (options.a4PageH + pageGap),
          w: options.a4PageW,
          h: options.a4PageH,
        })),
        pagePreset: "a4-real",
      };
    }

    const canvasW = contentCanvasW;
    let canvasH = Math.round(rows.length * stripH + (rows.length - 1) * options.rowGap + options.sheetPad * 2);
    let infoBlockRect = null;
    if (options.showInfoBlock) {
      // 矩形 y 与行 Y 同一坐标系（相对 contentY 锚点）：
      // free 预览下 contentY = blockH + rowGap，还原为 sheetPad；
      // A4 等页面布局下 contentY = 页面居中 + 内部预留，区块随页面偏移平移且不重复叠加内部预留
      infoBlockRect = {
        x: options.sheetPad,
        y: options.sheetPad - contentY,
        w: canvasW - options.sheetPad * 2,
        h: blockH,
      };
      canvasH += contentY;
    }
    return { rows, stripW, stripH, canvasW, canvasH, outerMargin, contentY, infoBlockRect };
  }

  // 行 y 统一取值：a4-real 分页布局用 rowOffsets（含页偏移），其余布局沿用均匀步进公式
  function getRowY(layout, rowIndex, options) {
    if (layout.rowOffsets) return layout.rowOffsets[rowIndex];
    return (layout.contentY || 0) + options.sheetPad + rowIndex * (layout.stripH + options.rowGap);
  }

  // 行内条带实际宽度：宽幅每行在最后一帧后结束；其他格式仅末行按实际内容截断
  function getRowStripWidth(layout, rowInfo, options) {
    return options.isWide135 || rowInfo.trimmed
      ? rowInfo.stripW + layout.outerMargin * 2
      : layout.stripW;
  }

  function getRowX(layout, rowIndex, options) {
    const baseX = (layout.contentX || 0) + options.sheetPad + layout.outerMargin;
    const resolveLtrRowX = () => {
      if (!options.isWide135 || layout.rows.length < 2) return baseX;

      const firstRowOffset = layout.rows[1].stripW - layout.rows[0].stripW;
      const baseOffset = Math.max(0, -firstRowOffset);
      const getOriginalRowX = (index) => baseX + baseOffset + (index === 0 ? firstRowOffset : 0);
      if (options.showLeader) return getOriginalRowX(rowIndex);

      let left = Infinity;
      let right = -Infinity;
      layout.rows.forEach((row, index) => {
        const rowX = getOriginalRowX(index);
        left = Math.min(left, rowX - layout.outerMargin);
        right = Math.max(right, rowX + row.stripW + layout.outerMargin);
      });
      const groupOffset = layout.canvasW / 2 - (left + right) / 2;

      return getOriginalRowX(rowIndex) + groupOffset;
    };

    const ltrX = resolveLtrRowX();
    if (options.leaderDirection !== "right") return ltrX;

    // 片头朝右（RTL）：整条条带沿条带区中轴镜像。
    // 满宽条带代数上恰好落在原位（其他行不受任何影响）；
    // 内容不足整行的条带（末行 / 宽幅行）整体右对齐 —— 照片从右边缘顶格、自右向左排列。
    const rowStripW = getRowStripWidth(layout, layout.rows[rowIndex], options);
    const stripAreaAxis = (layout.contentX || 0) + options.sheetPad + layout.stripW / 2;
    return 2 * stripAreaAxis - (ltrX - layout.outerMargin + rowStripW) + layout.outerMargin;
  }

  // a4-real：逐页绘制 A4 纸面。工作台底色（drawSheetBackground）先铺整画布，
  // 页面矩形铺白纸 + 轻投影 + 细边框；模糊照片背景模式下照片逐页铺在纸面内（不溢出页边界）；
  // 合并模式（pageGap=0）页面无缝相连，跳过投影与边框（避免页间出现分隔线）
  function drawPageSheets(items, options, layout, cullRect) {
    const useBlur = options.backgroundMode === "blur" && !state.lightTable.active;
    const backgroundItem = useBlur ? getBackgroundItem(items) : null;
    const shadowBlur = Math.round(layout.canvasW * 0.006);
    const seamless = layout.pageGap === 0;
    layout.pageRects.forEach((pageRect) => {
      const clipX = Math.max(pageRect.x, cullRect.x);
      const clipY = Math.max(pageRect.y, cullRect.y);
      const clipW = Math.min(pageRect.x + pageRect.w, cullRect.x + cullRect.width) - clipX;
      const clipH = Math.min(pageRect.y + pageRect.h, cullRect.y + cullRect.height) - clipY;
      if (clipW <= 0 || clipH <= 0) return;
      if (backgroundItem) {
        FilmFrame135.drawBlurredPhotoBackground(
          ctx,
          backgroundItem.source,
          backgroundItem.width,
          backgroundItem.height,
          pageRect,
          options.backgroundBlurPx,
          { x: clipX, y: clipY, w: clipW, h: clipH },
        );
      } else {
        ctx.save();
        if (!seamless) {
          ctx.shadowColor = "rgba(45, 40, 32, 0.16)";
          ctx.shadowBlur = shadowBlur;
        }
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(pageRect.x, pageRect.y, pageRect.w, pageRect.h);
        ctx.restore();
      }
      if (!seamless) {
        ctx.strokeStyle = "rgba(45, 40, 32, 0.1)";
        ctx.lineWidth = 1;
        ctx.strokeRect(pageRect.x + 0.5, pageRect.y + 0.5, pageRect.w - 1, pageRect.h - 1);
      }
    });
  }

  // 绘制体：假定调用方已设好 ctx 变换。cullRect 为当前坐标空间内的可见区域（用于背景填充与整行剔除）。
  function paintIndex(items, options, layout, { cullRect, buildHitData }) {
    drawSheetBackground(layout.canvasW, layout.canvasH, cullRect, {
      lightTable: state.lightTable.active,
      backgroundMode: options.backgroundMode,
    });
    if (layout.pageRects) {
      drawPageSheets(items, options, layout, cullRect);
    } else if (options.backgroundMode === "blur" && !state.lightTable.active) {
      const backgroundItem = getBackgroundItem(items);
      if (backgroundItem) {
        FilmFrame135.drawBlurredPhotoBackground(
          ctx,
          backgroundItem.source,
          backgroundItem.width,
          backgroundItem.height,
          { x: 0, y: 0, w: layout.canvasW, h: layout.canvasH },
          options.backgroundBlurPx,
          { x: cullRect.x, y: cullRect.y, w: cullRect.width, h: cullRect.height },
        );
      }
    }

    if (buildHitData) state.frameRects = [];

    if (options.showInfoBlock && layout.infoBlockRect) {
      // 区块矩形与行 Y 同一坐标系（相对 contentY/contentX 锚点），叠加锚点偏移即为页面位置
      const blockRect = layout.infoBlockRect;
      drawInfoBlock({
        ...blockRect,
        x: blockRect.x + (layout.contentX || 0),
        y: blockRect.y + (layout.contentY || 0),
      }, options, items);
    } else if (activeCanvas === previewCanvas) {
      // 区块关闭 / 无区块布局时同步清空暗盒几何与命中区：
      // 否则残留数据会让「点击空白处弹暗盒菜单」「按过期几何磁吸」成为可能
      state.infoBlockCanisterGeom = null;
      state.infoBlockCanisterHit = null;
    }

    layout.rows.forEach((rowInfo, row) => {
      const y = getRowY(layout, row, options);
      const shadowPad = options.frameW * 0.08;
      if (y + layout.stripH + shadowPad < cullRect.y || y - shadowPad > cullRect.y + cullRect.height) return;
      const rowItems = items.slice(rowInfo.start, rowInfo.start + rowInfo.count);
      const x = getRowX(layout, row, options);
      drawFilmRow(rowItems, rowInfo, x, y, layout, row, options, buildHitData);
    });

    if (buildHitData && state.dropIndex !== null) {
      drawDropIndicator(layout, options);
    }
    if (buildHitData && state.selectedFrameIds.size) {
      drawSelectedFrameOverlays();
    }
  }

  function drawSelectedFrameOverlays() {
    state.frameRects.forEach((frame) => {
      if (!state.selectedFrameIds.has(frame.id)) return;
      const { x, y, w, h } = frame.bounds;
      const lineWidth = Math.max(3, Math.min(w, h) * 0.025);
      const badgeSize = Math.max(22, Math.min(w, h) * 0.16);
      ctx.save();
      ctx.fillStyle = "rgba(227, 165, 58, 0.14)";
      ctx.fillRect(x, y, w, h);
      ctx.strokeStyle = "#e3a53a";
      ctx.lineWidth = lineWidth;
      ctx.strokeRect(x + lineWidth / 2, y + lineWidth / 2, w - lineWidth, h - lineWidth);
      ctx.fillStyle = "#e3a53a";
      ctx.beginPath();
      ctx.arc(x + w - badgeSize * 0.7, y + badgeSize * 0.7, badgeSize / 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = Math.max(2, badgeSize * 0.12);
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.beginPath();
      ctx.moveTo(x + w - badgeSize * 0.95, y + badgeSize * 0.72);
      ctx.lineTo(x + w - badgeSize * 0.76, y + badgeSize * 0.9);
      ctx.lineTo(x + w - badgeSize * 0.43, y + badgeSize * 0.5);
      ctx.stroke();
      ctx.restore();
    });
  }

  function drawLayout(items, options, layout, tile = null) {
    const isPreview = activeCanvas === previewCanvas;
    const bounds = tile || { x: 0, y: 0, width: layout.canvasW, height: layout.canvasH };

    activeCanvas.width = bounds.width;
    activeCanvas.height = bounds.height;
    ctx.clearRect(0, 0, bounds.width, bounds.height);
    ctx.save();
    ctx.translate(-bounds.x, -bounds.y);
    paintIndex(items, options, layout, { cullRect: bounds, buildHitData: isPreview });
    ctx.restore();
  }

  function drawIndex(items, options) {
    const layout = computeLayout(items.length, options);
    drawLayout(items, options, layout);
  }

  function drawSheetBackground(
    width,
    height,
    bounds = { x: 0, y: 0, width, height },
    { lightTable = false, backgroundMode = "none" } = {},
  ) {
    const pureWhite = lightTable || backgroundMode === "white";
    ctx.fillStyle = pureWhite ? "#ffffff" : "#f7f1e6";
    ctx.fillRect(bounds.x, bounds.y, bounds.width, bounds.height);
    if (pureWhite) return;
    ctx.fillStyle = "rgba(45, 40, 32, 0.035)";
    const firstStripe = Math.ceil(bounds.y / 18) * 18;
    for (let y = firstStripe; y < bounds.y + bounds.height; y += 18) {
      ctx.fillRect(bounds.x, y, bounds.width, 1);
    }
  }

  // 片头方向朝右时，以条带水平中轴为镜像轴翻转绘制坐标系（仅几何元素，不翻转照片位图与文字）
  function mirrorStripX(context, x, stripW) {
    context.save();
    context.translate(2 * x + stripW, 0);
    context.scale(-1, 1);
  }

  const MATISSE_WEIGHT_FILES = { 300: "L", 500: "M", 600: "DB", 700: "B", 800: "EB", 900: "UB" };

  // 按需加载信息区块所选字重的 MatissePro（单个 OTF 约 10MB，仅在启用区块时拉取一次并缓存）
  function ensureInfoBlockFont(weight) {
    const key = String(weight);
    if (infoBlockFontRequests.has(key)) return infoBlockFontRequests.get(key);
    const suffix = MATISSE_WEIGHT_FILES[key] || "DB";
    const face = new FontFace("Matisse Pro", `url(fonts/FOT-MatissePro-${suffix}.otf)`, { weight: key });
    const request = face
      .load()
      .then((loaded) => {
        document.fonts.add(loaded);
        return true;
      })
      .catch((error) => {
        console.error("信息区块字体加载失败", error);
        return false;
      });
    infoBlockFontRequests.set(key, request);
    return request;
  }

  const INFO_BLOCK_DARK_BG = "#1f2126";

  // 解析信息区块主题：模板决定几何风格，底色（玻璃/跟随背景/自选）决定材质与调色板明暗
  function resolveInfoBlockTheme(options) {
    const template = options.infoBlockTemplate || "classic";
    const bgChoice = options.infoBlockBg || "glass";
    let bg;
    if (bgChoice === "paper") bg = "#f7f1e6";
    else if (bgChoice === "white") bg = "#ffffff";
    else if (bgChoice === "dark") bg = INFO_BLOCK_DARK_BG;
    else if (bgChoice === "none") bg = null;
    else bg = bgChoice; // "glass" 磨砂玻璃 / "follow" 半透明跟随背景 / "kraft" 牛皮纸 / "parchment" 羊皮纸
    const onDark = bg === INFO_BLOCK_DARK_BG
      || (bg === "follow" && template === "noir");
    const palette = onDark
      ? {
          ink: "#f2efe8",
          muted: "rgba(242, 239, 232, 0.62)",
          border: "rgba(242, 239, 232, 0.5)",
          strongBorder: "rgba(242, 239, 232, 0.82)",
          accent: "#ff6b3d",
        }
      : {
          ink: "#2b2620",
          muted: "rgba(43, 38, 32, 0.55)",
          border: "rgba(43, 38, 32, 0.4)",
          strongBorder: "rgba(43, 38, 32, 0.78)",
          accent: "#c8371e",
        };
    return { template, bg, onDark, ...palette };
  }

  // 颗粒纹理瓦片：暖白细颗粒模拟磨砂亚克力 / 摄影档案卡材质（缓存，96px 平铺）
  let infoBlockGrainTile = null;
  function getGrainTile() {
    if (infoBlockGrainTile) return infoBlockGrainTile;
    try {
      const tile = document.createElement("canvas");
      tile.width = 96;
      tile.height = 96;
      const tctx = tile.getContext("2d");
      const image = tctx.createImageData(96, 96);
      const data = image.data;
      for (let i = 0; i < data.length; i += 4) {
        const value = 200 + Math.round(Math.random() * 40);
        data[i] = value;
        data[i + 1] = value - 4;
        data[i + 2] = value - 12;
        data[i + 3] = Math.random() < 0.6 ? 14 : 34;
      }
      tctx.putImageData(image, 0, 0);
      infoBlockGrainTile = tile;
    } catch (error) {
      infoBlockGrainTile = false;
    }
    return infoBlockGrainTile || null;
  }

  function traceInfoBlockPath(rect, r) {
    ctx.beginPath();
    ctx.moveTo(rect.x + r, rect.y);
    ctx.arcTo(rect.x + rect.w, rect.y, rect.x + rect.w, rect.y + rect.h, r);
    ctx.arcTo(rect.x + rect.w, rect.y + rect.h, rect.x, rect.y + rect.h, r);
    ctx.arcTo(rect.x, rect.y + rect.h, rect.x, rect.y, r);
    ctx.arcTo(rect.x, rect.y, rect.x + rect.w, rect.y, r);
    ctx.closePath();
  }

  // 做旧纸张纹理：牛皮纸 / 羊皮纸贴图（懒加载，加载完成后补渲一次；加载期间先铺同族底色）
  const INFO_BLOCK_TEXTURE_FILES = {
    kraft: "textures/kraft-paper.jpg",
    parchment: "textures/parchment.jpg",
  };
  const INFO_BLOCK_TEXTURE_FALLBACK = { kraft: "#e9c795", parchment: "#f3e3c3" };
  const infoBlockTextures = { kraft: null, parchment: null };

  function ensureInfoBlockTexture(kind) {
    const existing = infoBlockTextures[kind];
    if (existing === false) return null; // 加载中或加载失败
    if (existing) return existing;
    const src = INFO_BLOCK_TEXTURE_FILES[kind];
    if (!src) {
      infoBlockTextures[kind] = false;
      return null;
    }
    infoBlockTextures[kind] = false;
    const img = new Image();
    img.onload = () => {
      infoBlockTextures[kind] = img;
      scheduleRender();
    };
    img.onerror = () => {
      infoBlockTextures[kind] = false;
    };
    img.src = src;
    return null;
  }

  // 纸张材质：贴图 cover 填充区块圆角区域，不透明度与模糊滑块直接作用于贴图
  //（外扩出血余量，避免模糊在边缘产生透明黑边）
  function drawInfoBlockTexture(rect, options, kind) {
    const img = ensureInfoBlockTexture(kind);
    const alpha = clamp(Number(options.infoBlockOpacity) || 1, 0.1, 1);
    if (!img) {
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.fillStyle = INFO_BLOCK_TEXTURE_FALLBACK[kind] || "#f7f1e6";
      ctx.fillRect(rect.x, rect.y, rect.w, rect.h);
      ctx.restore();
      return;
    }
    const blur = Math.max(0, options.infoBlockBlurPx || 0);
    const bleed = Math.round(blur * 2 + 2);
    const destW = rect.w + bleed * 2;
    const destH = rect.h + bleed * 2;
    const iw = img.naturalWidth || img.width;
    const ih = img.naturalHeight || img.height;
    if (!iw || !ih) return;
    const cover = Math.max(destW / iw, destH / ih);
    const srcW = destW / cover;
    const srcH = destH / cover;
    const sx = (iw - srcW) / 2;
    const sy = (ih - srcH) / 2;
    ctx.save();
    if (blur > 0) ctx.filter = `blur(${blur}px)`;
    ctx.globalAlpha = alpha;
    ctx.drawImage(img, sx, sy, srcW, srcH, rect.x - bleed, rect.y - bleed, destW, destH);
    ctx.restore();
  }

  // 玻璃材质：把区块背后的内容（模糊背景照片墙）取样 → 轻微放大 + 高斯模糊 + 降饱和，
  // 再叠暖白半透明层、亚克力高光与细腻颗粒，形成磨砂亚克力/毛玻璃质感。
  // isFrosted=true 为「磨砂玻璃」（放大 1.18x、降饱和更多、颗粒与高光）；false 为「跟随背景」轻磨砂。
  // sampleCanvas：羽化模式下传入主画布（材质绘制在离屏层，取样仍取主画布内容）
  function drawInfoBlockGlass(rect, options, theme, isFrosted, sampleCanvas = null) {
    const canvas = sampleCanvas || ctx.canvas;
    if (!canvas || !canvas.width || !canvas.height) return;
    const blur = Math.max(0, options.infoBlockBlurPx || 0);
    const scale = isFrosted ? 1.18 : 1;
    const saturate = isFrosted ? 0.72 : 0.9;
    // 出血余量：确保模糊在区块边缘仍有真实内容可采样（避免透明/黑边）
    const bleed = Math.round(blur * 2 + 10);
    const cw = canvas.width;
    const ch = canvas.height;
    const cx = rect.x + rect.w / 2;
    const cy = rect.y + rect.h / 2;
    const destW = rect.w + bleed * 2;
    const destH = rect.h + bleed * 2;
    const srcW = destW / scale;
    const srcH = destH / scale;
    let sx = cx - srcW / 2;
    let sy = cy - srcH / 2;
    let dx = rect.x - bleed;
    let dy = rect.y - bleed;
    if (sx < 0) { dx -= sx * scale; sx = 0; }
    if (sy < 0) { dy -= sy * scale; sy = 0; }
    const overX = sx + srcW - cw;
    if (overX > 0) { sx -= overX; dx += overX * scale; }
    const overY = sy + srcH - ch;
    if (overY > 0) { sy -= overY; dy += overY * scale; }

    ctx.save();
    ctx.filter = `blur(${blur}px) saturate(${saturate})`;
    ctx.drawImage(canvas, sx, sy, srcW, srcH, dx, dy, destW, destH);
    ctx.restore();

    // 暖白半透明叠加：不透明度滑块直接控制玻璃整体通透度（默认 60%）
    const tone = theme.onDark
      ? "rgba(31, 33, 38, 0.92)"
      : options.backgroundMode === "white" || state.lightTable.active ? "#ffffff" : "#f6f1e7";
    ctx.save();
    ctx.globalAlpha = clamp(Number(options.infoBlockOpacity) || 0.6, 0.1, 1);
    ctx.fillStyle = tone;
    ctx.fillRect(rect.x - 2, rect.y - 2, rect.w + 4, rect.h + 4);
    ctx.restore();

    if (isFrosted && !theme.onDark) {
      // 亚克力高光：左上柔光渐变
      const sheen = ctx.createLinearGradient(rect.x, rect.y, rect.x + rect.w * 0.7, rect.y + rect.h);
      sheen.addColorStop(0, "rgba(255, 255, 255, 0.2)");
      sheen.addColorStop(0.5, "rgba(255, 255, 255, 0.05)");
      sheen.addColorStop(1, "rgba(255, 255, 255, 0)");
      ctx.fillStyle = sheen;
      ctx.fillRect(rect.x, rect.y, rect.w, rect.h);
      // 细腻颗粒 + 纸张纹理：极低透明度平铺，模拟磨砂亚克力/档案卡，不产生明显噪点
      const tile = getGrainTile();
      if (tile) {
        const pattern = ctx.createPattern(tile, "repeat");
        if (pattern) {
          ctx.save();
          ctx.globalAlpha = 0.06;
          ctx.fillStyle = pattern;
          ctx.fillRect(rect.x, rect.y, rect.w, rect.h);
          ctx.restore();
        }
      }
    }
  }

  // 胶片色彩采样：把下方首行照片缩成小图，作为信息栏边缘「色彩渗透」的取色来源。
  // 信息栏在照片行之前绘制（画布上还没有胶片），因此不能用画布取样，改用源位图直接合成。
  let infoBlockFilmSampleCache = { key: "", canvas: null };
  function getInfoBlockFilmSample(items) {
    const picks = (items || []).filter((item) => item && (item.source || item.originalSource)).slice(0, 6);
    if (!picks.length) return null;
    const key = picks.map((item) => `${item.id}:${item.editVersion || 0}:${item.sourceGeneration || 0}`).join(",");
    if (key === infoBlockFilmSampleCache.key) return infoBlockFilmSampleCache.canvas;
    let canvas = null;
    try {
      canvas = document.createElement("canvas");
      canvas.width = 120;
      canvas.height = 40;
      const sctx = canvas.getContext("2d");
      if (sctx) {
        const cellW = canvas.width / picks.length;
        picks.forEach((item, index) => {
          const src = item.source || item.originalSource;
          const w = item.width || item.originalWidth || src.width || 1;
          const h = item.height || item.originalHeight || src.height || 1;
          sctx.drawImage(src, 0, 0, w, h, index * cellW, 0, cellW, canvas.height);
        });
      } else {
        canvas = null;
      }
    } catch (error) {
      canvas = null;
    }
    infoBlockFilmSampleCache = { key, canvas };
    return canvas;
  }

  // 边缘羽化：材质绘制到离屏层 → 叠入仅落在边缘环带的胶片模糊色彩渗透与极轻微柔光
  // → 以「模糊圆角矩形」蒙版做由内向外的透明渐变 → 合成回主画布。
  // 中心保持原有不透明度与清晰度，四周渐隐融入背景；无描边、无发光、无阴影。
  function drawInfoBlockFeathered(rect, r, options, theme, flags, items) {
    const feather = clamp(Math.round(rect.h * 0.18), 8, Math.round(rect.h * 0.4));
    const blur = flags.blur;
    // 与当前可见区域（瓦片）不相交时直接跳过，避免流式导出逐瓦片构建离屏层
    if (typeof ctx.getTransform === "function") {
      const tf = ctx.getTransform();
      const devX = tf.a * rect.x + tf.c * rect.y + tf.e;
      const devY = tf.b * rect.x + tf.d * rect.y + tf.f;
      const devW = tf.a * rect.w;
      const devH = tf.d * rect.h;
      const span = feather * 2 + 4;
      if (devX + devW < -span || devY + devH < -span || devX > ctx.canvas.width + span || devY > ctx.canvas.height + span) {
        return;
      }
    }
    const bleed = Math.round(feather * 1.6 + blur * 2 + 4);
    const originX = Math.round(rect.x - bleed);
    const originY = Math.round(rect.y - bleed);
    const layerW = Math.ceil(rect.w + bleed * 2);
    const layerH = Math.ceil(rect.h + bleed * 2);
    if (layerW <= 0 || layerH <= 0) return;

    const layer = document.createElement("canvas");
    layer.width = layerW;
    layer.height = layerH;
    const lctx = layer.getContext("2d");
    if (!lctx) return;
    const mainCtx = ctx;
    const mainCanvas = mainCtx.canvas;

    // 1) 材质本体：沿用现有玻璃 / 贴图 / 实底逻辑，绘制到离屏层（坐标仍用主画布坐标系）
    ctx = lctx;
    lctx.save();
    lctx.setTransform(1, 0, 0, 1, -originX, -originY);
    if (flags.isTranslucent) {
      drawInfoBlockGlass(rect, options, theme, theme.bg === "glass", mainCanvas);
    } else if (flags.isTexture) {
      drawInfoBlockTexture(rect, options, theme.bg);
    } else if (theme.bg) {
      if (blur > 0) ctx.filter = `blur(${blur}px)`;
      ctx.fillStyle = theme.bg;
      const solidBleed = blur * 2 + 2;
      ctx.fillRect(rect.x - solidBleed, rect.y - solidBleed, rect.w + solidBleed * 2, rect.h + solidBleed * 2);
      ctx.filter = "none";
    }
    // 极轻微柔光：中心透明、靠边微亮，随羽化蒙版一起淡出（不形成描边/发光）
    const glow = ctx.createRadialGradient(
      rect.x + rect.w * 0.42, rect.y + rect.h * 0.4, Math.min(rect.w, rect.h) * 0.1,
      rect.x + rect.w / 2, rect.y + rect.h / 2, Math.max(rect.w, rect.h) * 0.72,
    );
    glow.addColorStop(0, "rgba(255, 255, 255, 0)");
    glow.addColorStop(0.72, "rgba(255, 255, 255, 0.02)");
    glow.addColorStop(1, theme.onDark ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 0.12)");
    ctx.fillStyle = glow;
    ctx.fillRect(rect.x, rect.y, rect.w, rect.h);
    lctx.restore();

    // 2) 边缘色彩渗透层：胶片色彩（下方照片）+ 片基暖色，只保留边缘环带，核心保持纯净
    const filmSample = getInfoBlockFilmSample(items);
    const bleedLayer = document.createElement("canvas");
    bleedLayer.width = layerW;
    bleedLayer.height = layerH;
    const bctx = bleedLayer.getContext("2d");
    if (bctx) {
      bctx.save();
      bctx.setTransform(1, 0, 0, 1, -originX, -originY);
      if (filmSample) {
        bctx.filter = `blur(${Math.round(feather * 0.45)}px) saturate(1.15)`;
        bctx.globalAlpha = 0.5;
        const pad = feather * 0.5;
        bctx.drawImage(
          filmSample,
          rect.x - pad, rect.y - pad * 0.6, rect.w + pad * 2, rect.h + pad * 1.2,
          rect.x - pad, rect.y - pad * 0.6, rect.w + pad * 2, rect.h + pad * 1.2,
        );
      }
      // 片基暖色渗透（黄 / 橙 / 棕，与 135 片基同族），提供"下方胶片透上来"的底味
      bctx.filter = `blur(${Math.round(feather * 0.4)}px)`;
      bctx.globalAlpha = theme.onDark ? 0.16 : 0.2;
      bctx.fillStyle = theme.onDark ? "#6b4a2a" : "#e0b072";
      const warmPad = feather * 0.4;
      bctx.fillRect(rect.x - warmPad, rect.y - warmPad, rect.w + warmPad * 2, rect.h + warmPad * 2);
      bctx.restore();

      // 只保留边缘环带：以柔边圆角矩形做 destination-out 挖掉核心（过渡平滑，无硬接缝）
      bctx.save();
      bctx.setTransform(1, 0, 0, 1, -originX, -originY);
      bctx.globalCompositeOperation = "destination-out";
      bctx.filter = `blur(${Math.round(feather * 0.5)}px)`;
      bctx.fillStyle = "#ffffff";
      const coreInset = feather * 0.6;
      traceInfoBlockPath({
        x: rect.x + coreInset,
        y: rect.y + coreInset,
        w: Math.max(1, rect.w - coreInset * 2),
        h: Math.max(1, rect.h - coreInset * 2),
      }, Math.max(0, r - coreInset));
      bctx.fill();
      bctx.restore();
    }
    lctx.save();
    lctx.setTransform(1, 0, 0, 1, 0, 0);
    lctx.drawImage(bleedLayer, originX, originY);
    lctx.restore();

    // 3) 羽化蒙版：模糊的圆角矩形 → 由内向外透明度渐变降低，四周自然消散
    lctx.save();
    lctx.setTransform(1, 0, 0, 1, -originX, -originY);
    lctx.globalCompositeOperation = "destination-in";
    lctx.filter = `blur(${Math.round(feather * 0.42)}px)`;
    lctx.fillStyle = "#ffffff";
    const inset = feather * 0.5;
    traceInfoBlockPath({
      x: rect.x + inset,
      y: rect.y + inset,
      w: Math.max(1, rect.w - inset * 2),
      h: Math.max(1, rect.h - inset * 2),
    }, Math.max(0, r - inset));
    lctx.fill();
    lctx.restore();

    // 4) 合成回主画布（不修改主画布变换：流式导出会给 ctx 预置瓦片偏移 translate）
    ctx = mainCtx;
    ctx.save();
    ctx.drawImage(layer, originX, originY);
    ctx.restore();
  }

  // 索引信息区块：FILM / DATE / CAMERA·LENS / REMARKS 字段行 + 可选暗盒图（左右可放）。
  // 四套主题：classic 经典框线+红色点缀 / modern 浅框简洁 / lines 极简竖线 / noir 深底亮字。
  // 底色：磨砂玻璃（默认）/ 半透明跟随背景 / 纸底 / 纯白 / 深色 / 透明；不透明度与模糊可调。
  function drawInfoBlock(rect, options, items = null) {
    const theme = resolveInfoBlockTheme(options);
    // 圆角与胶片条带边框一致（同 buildStripPath 的圆角公式）
    const rBase = options.is120
      ? Math.max(2, Math.round(options.frameW * 0.004))
      : Math.max(6, Math.round(options.frameW * 0.015));
    // 圆角滑块：0% = 现状（外框回落到胶片边框同款 rBase、字段框直角）；
    // >0 时「外框（包住四个字段框的信息栏边界）」与「四个字段框」应用完全相同的圆角，内外一致变化
    const radiusT = clamp(Number(options.infoBlockRadius) || 0, 0, 100) / 100;
    const featherOn = Boolean(options.infoBlockFeather);
    const blur = options.infoBlockBlurPx || 0;
    const isTranslucent = theme.bg === "glass" || theme.bg === "follow";
    const isTexture = theme.bg === "kraft" || theme.bg === "parchment";

    // ── 几何先行 ──
    // 外框圆角要与字段框圆角取同一个值，而字段框圆角由字段框几何（内区 / 暗盒让位 / 可用宽度）决定，
    // 因此必须先把这些纯数值几何算完，再去绘制外框材质（材质绘制需要 r）。
    const pad = rect.h * 0.07;
    const inner = {
      x: rect.x + pad,
      y: rect.y + pad,
      w: rect.w - pad * 2,
      h: rect.h - pad * 2,
    };
    // 暗盒区：按所选方向放在内容区一端，等比缩放、垂直居中；其余宽度留给字段。
    // 支持点击画布暗盒后缩放（50%–300%）；「与框线精确等宽」由滑块输入侧磁吸到精确值实现，
    // 渲染始终按真实缩放绘制、不做容差吸附（避免出现「一段区间内看起来都等宽」的歧义）；
    // 超出信息栏的部分交给外框圆角路径裁剪。
    const zoneW = options.infoBlockCanister ? Math.round(inner.h * 0.92) : 0;
    const fieldsGap = zoneW ? Math.round(inner.h * 0.1) : 0;
    const canisterOnLeft = options.infoBlockCanisterSide === "left";
    let canisterRect = null;
    if (zoneW) {
      const img = options.infoBlockCanister;
      if (img && img.width > 0 && img.height > 0) {
        const zoneX = canisterOnLeft ? inner.x : inner.x + inner.w - zoneW;
        const fitScale = Math.min(zoneW / img.width, inner.h / img.height);
        const scale = clamp(Number(options.infoBlockCanisterScale) || 1, CANISTER_SCALE_MIN, CANISTER_SCALE_MAX);
        // 真实比例绘制：等宽时刻（scale = innerH / fitH）暗盒上下边缘与字段框上下框线精确重合
        const drawH = img.height * fitScale * scale;
        // 只按高度定尺寸：放大（最高 300%）后横向溢出交给外框圆角路径裁剪，
        // 不做「按宽度回缩」——否则超过 ~200% 后滑块会失去效果（用户要求可放大到 300%）
        const drawW = (drawH / img.height) * img.width;
        canisterRect = {
          x: zoneX + (zoneW - drawW) / 2,
          y: inner.y + (inner.h - drawH) / 2,
          w: drawW,
          h: drawH,
        };
        // 记录几何，供「暗盒尺寸」滑块计算精确等宽值（innerH / fitH）并做即时提醒；
        // 磁吸与提醒只信当前帧几何，避免拿到上一张图 / 上一布局的过期数据
        if (activeCanvas === previewCanvas) {
          state.infoBlockCanisterGeom = { innerH: inner.h, fitH: img.height * fitScale };
        }
      } else if (activeCanvas === previewCanvas) {
        state.infoBlockCanisterGeom = null;
      }
    } else if (activeCanvas === previewCanvas) {
      state.infoBlockCanisterGeom = null;
    }
    const fields = zoneW
      ? {
          x: canisterOnLeft ? inner.x + zoneW + fieldsGap : inner.x,
          y: inner.y,
          w: inner.w - zoneW - fieldsGap,
          h: inner.h,
        }
      : inner;

    // 字段列：FILM / DATE / CAMERA·LENS / REMARKS，各主题共用同一几何；权重可在弹窗中调节
    const weights = Array.isArray(options.infoBlockWeights) && options.infoBlockWeights.length === 4
      ? options.infoBlockWeights.map((weight) => clamp(Number(weight) || 1, 0.3, 2.5))
      : INFO_BLOCK_DEFAULT_WEIGHTS;
    const defs = [
      { label: "FILM", weight: weights[0] },
      { label: "DATE", weight: weights[1] },
      { label: "CAMERA / LENS", weight: weights[2] },
      { label: "REMARKS", weight: weights[3] },
    ];
    const isLines = theme.template === "lines";
    const boxGap = isLines ? 0 : Math.round(fields.h * 0.09);
    const usableW = fields.w - boxGap * (defs.length - 1);
    const totalWeight = defs.reduce((sum, def) => sum + def.weight, 0);
    // 圆角上限：不超过字段框半高 / 最窄字段框半宽（避免相邻框的圆角互相吞掉）
    const boxRLimit = Math.min(
      fields.h / 2,
      ...defs.map((def) => ((usableW * def.weight) / totalWeight) / 2),
    );
    // 内框（四个字段框）圆角：随「框圆角」滑块联动（0% 时保持现有直角样式）
    const boxR = radiusT > 0
      ? Math.min(Math.round(Math.min(fields.h, usableW / defs.length) * 0.2 * radiusT), Math.floor(boxRLimit))
      : 0;
    // 外框（信息栏区块边界）+ 羽化蒙版 + 暗盒裁剪共用的半径：与内框完全相同；
    // 0% 时 boxR 为 0，回落到 rBase，等价于改动前的样式
    const r = Math.max(rBase, boxR);

    if (featherOn) {
      // 边缘羽化：材质画到离屏层做渐变透明与色彩渗透（内框与文字仍清晰绘制，位置不变）
      drawInfoBlockFeathered(rect, r, options, theme, { isTranslucent, isTexture, blur }, items);
    } else {
      // 背景材质：裁剪在圆角路径内绘制
      ctx.save();
      traceInfoBlockPath(rect, r);
      ctx.clip();
      if (isTranslucent) {
        drawInfoBlockGlass(rect, options, theme, theme.bg === "glass");
      } else if (isTexture) {
        // 做旧纸张贴图：不透明度与模糊滑块直接作用于贴图
        drawInfoBlockTexture(rect, options, theme.bg);
      } else if (theme.bg) {
        // 实底材质不透明（透明度滑块专属于玻璃/半透明材质，保证「纸底」与「跟随背景」可区分）
        if (blur > 0) ctx.filter = `blur(${blur}px)`;
        ctx.fillStyle = theme.bg;
        const bleed = blur * 2 + 2;
        ctx.fillRect(rect.x - bleed, rect.y - bleed, rect.w + bleed * 2, rect.h + bleed * 2);
      }
      ctx.restore();
    }

    // 半透明材质边缘：极细 1px 半透明白色高光描边（无黑框）；羽化时取消硬描边，避免破坏柔和过渡
    if (isTranslucent && !featherOn) {
      ctx.save();
      traceInfoBlockPath(
        { x: rect.x + 0.5, y: rect.y + 0.5, w: rect.w - 1, h: rect.h - 1 },
        r,
      );
      ctx.strokeStyle = theme.onDark ? "rgba(255, 255, 255, 0.28)" : "rgba(255, 255, 255, 0.55)";
      ctx.lineWidth = 1;
      ctx.stroke();
      ctx.restore();
    }

    // 暗盒图：绘制在外框材质之上；记录命中矩形（仅预览画布）供点击时弹出菜单
    if (canisterRect) {
      ctx.save();
      traceInfoBlockPath(rect, r);
      ctx.clip();
      ctx.drawImage(
        options.infoBlockCanister,
        canisterRect.x,
        canisterRect.y,
        canisterRect.w,
        canisterRect.h,
      );
      ctx.restore();
      if (activeCanvas === previewCanvas) {
        state.infoBlockCanisterHit = { ...canisterRect };
      }
    } else if (activeCanvas === previewCanvas) {
      state.infoBlockCanisterHit = null;
    }
    const lineWidth = Math.max(1, options.frameW * 0.005);
    const inset = Math.round(fields.h * 0.07);
    // 字号以 135 画幅观感为基准（fields.h*0.15）；窄画幅（6×6 / 6×9 等）画布更窄，
    // 再按各字段框宽度收缩，保证标签永不溢出框线、互不遮挡
    let fontSize = Math.round(fields.h * 0.15);
    const labelFont = (size) => `${options.infoBlockFontWeight} ${size}px "Matisse Pro", serif`;
    ctx.font = labelFont(fontSize);
    for (let i = 0; i < defs.length; i += 1) {
      const colW = (usableW * defs[i].weight) / totalWeight;
      const labelW = ctx.measureText(defs[i].label).width;
      const maxLabelW = colW - inset * 1.1;
      if (labelW > maxLabelW && labelW > 0) {
        fontSize = Math.max(8, Math.floor(fontSize * (maxLabelW / labelW)));
        ctx.font = labelFont(fontSize);
      }
    }
    const labelY = fields.y + inset + fontSize / 2;

    ctx.save();
    ctx.lineWidth = lineWidth;
    ctx.font = labelFont(fontSize);
    ctx.textBaseline = "middle";
    ctx.textAlign = "left";

    // 极简线条模板：字段间竖分隔线
    if (isLines) {
      ctx.strokeStyle = theme.border;
      ctx.beginPath();
      let dividerX = fields.x;
      for (let i = 0; i < defs.length - 1; i += 1) {
        dividerX += (usableW * defs[i].weight) / totalWeight;
        const lineX = Math.round(dividerX) + lineWidth / 2;
        ctx.moveTo(lineX, fields.y);
        ctx.lineTo(lineX, fields.y + fields.h);
      }
      ctx.stroke();
    }

    let colX = fields.x;
    defs.forEach((def, index) => {
      const colW = (usableW * def.weight) / totalWeight;
      const accent = index === 0 && !isLines;
      if (!isLines) {
        // 框线模板：每字段一个描边盒；classic 用实墨框、FILM 盒用强调色（致敬胶卷 ROLL NO 红框）
        ctx.strokeStyle = accent && theme.template === "classic"
          ? theme.accent
          : theme.template === "classic" ? theme.strongBorder : theme.border;
        if (boxR > 0.5) {
          traceInfoBlockPath({ x: colX, y: fields.y, w: colW, h: fields.h }, Math.min(boxR, colW / 2, fields.h / 2));
          ctx.stroke();
        } else {
          ctx.strokeRect(colX, fields.y, colW, fields.h);
        }
      } else {
        // 书写基线：极简线条模板每字段一条底线
        ctx.strokeStyle = theme.border;
        const baseY = fields.y + fields.h - Math.max(lineWidth, fields.h * 0.025);
        ctx.beginPath();
        ctx.moveTo(colX + colW * 0.04, baseY);
        ctx.lineTo(colX + colW * 0.96, baseY);
        ctx.stroke();
      }
      ctx.fillStyle = accent ? theme.accent : theme.muted;
      ctx.fillText(def.label, colX + inset, labelY);
      colX += colW + boxGap;
    });
    ctx.restore();
  }

  // RTL（片头朝右）行的内容右锚点：与 LTR 内容左锚点（rowX + stripPadX + leaderAdvance）关于条带中轴对称
  function getRowRtlAnchorRight(layout, rowX, rowStripW, rowInfo, options) {
    return rowX + rowStripW - layout.outerMargin * 2 - options.stripPadX
      - (rowInfo.leader ? options.leaderAdvance : 0);
  }

  function drawFilmRow(items, rowInfo, x, y, layout, rowIndex, options, isPreview) {
    const stripH = layout.stripH;
    const stripX = x - layout.outerMargin;
    const stripW = getRowStripWidth(layout, rowInfo, options);
    // RTL：片头朝右时整行内容从右向左排布（照片序号 1 位于首行最右）
    const rtl = options.leaderDirection === "right";

    FilmFrame135.beginStripSurface(
      ctx,
      stripX,
      y,
      stripW,
      stripH,
      { ...options, tune: TUNE },
      (_context, pathX, pathY, pathW, pathH) => buildStripPath(pathX, pathY, pathW, pathH, rowInfo, options),
    );

    if (rowInfo.leader) {
      if (rtl) mirrorStripX(ctx, stripX, stripW);
      drawLeaderZone(stripX, y, stripH, options);
      if (rtl) ctx.restore();
    }

    const frameStartX = x + options.stripPadX;
    const contentStartX = getRowContentStartX(frameStartX, rowInfo, options);
    // RTL 内容右锚点：与 LTR 内容左锚点关于条带中轴对称
    const rtlAnchorRight = rtl ? getRowRtlAnchorRight(layout, x, stripW, rowInfo, options) : 0;
    const slotLeft = (index) => rtl
      ? rtlAnchorRight - (index + 1) * options.slotW - index * options.slotGap
      : getSlotX(contentStartX, index, options);
    items.forEach((item, index) => {
      const frameX = slotLeft(index);
      const frameY = y + options.bandH;
      const geometry = drawFrame(item, frameX, frameY, options, isPreview);
      if (isPreview) {
        state.frameRects.push({
          id: item.id,
          item,
          central: geometry.central,
          regions: geometry.regions,
          bounds: geometry.bounds,
          continuous: geometry.continuous,
        });
      }
    });

    if (!rowInfo.trimmed) {
      for (let slot = rowInfo.count; slot < rowInfo.capacity; slot += 1) {
        const frameX = slotLeft(slot);
        const frameY = y + options.bandH;
        drawBlankFrame(frameX, frameY, options);
      }
    }

    if (options.showSprockets) {
      const topZoneY = y + options.textH - options.textSprocketShift;
      const bottomZoneY = y + stripH - options.textH - options.sprocketH + options.textSprocketShift;
      // 135 齿孔以 38mm 片距锁定相位：每个标准 36×24mm 帧位固定对应 8 孔。
      // RTL 下先按 LTR 坐标计算孔位，再整体镜像——相位与帧位自动保持对应。
      const sprocketOriginX = options.is120
        ? null
        : frameStartX - options.edgeMarkGap / 2 + options.sprocketPitch / 2 - options.sprocketHoleW / 2;
      const drawSprocketsMirrored = () => {
        if (rtl) mirrorStripX(ctx, stripX, stripW);
        drawSprockets(stripX, bottomZoneY, stripW, options, null, sprocketOriginX);
        if (rowInfo.leader) {
          const geo = leaderGeometry(stripX, y, stripH, options);
          drawSprockets(stripX, topZoneY, stripW, options, geo.footX, sprocketOriginX);
        } else {
          drawSprockets(stripX, topZoneY, stripW, options, null, sprocketOriginX);
        }
        if (rtl) ctx.restore();
      };
      drawSprocketsMirrored();
    }

    if (options.showEdgeText) {
      const edgeTextW = stripW - layout.outerMargin * 2;
      if (options.is120) {
        drawEdgeTextTop120(x, y, edgeTextW, rowInfo, options);
        drawEdgeTextBottom120(x, y + stripH - options.textH, edgeTextW, rowInfo, rowIndex, options);
      } else {
        drawEdgeTextTop(x, y, edgeTextW, rowInfo, rowIndex, options);
        drawEdgeTextBottom(x, y + stripH - options.textH, edgeTextW, rowInfo, options);
      }
    }

    FilmFrame135.endStripSurface(
      ctx,
      stripX,
      y,
      stripW,
      stripH,
      { ...options, tune: TUNE },
      (_context, pathX, pathY, pathW, pathH) => buildStripPath(pathX, pathY, pathW, pathH, rowInfo, options),
    );
  }

  // 构建胶片条轮廓：普通行是圆角矩形；片头行左端是半宽片舌（上半条裁掉，舌落在下半）；片尾行右端是剪刀切口
  // 片头方向朝右时整条轮廓沿条带中轴镜像：片舌出现在首行右端，片尾切口出现在末行左端
  function buildStripPath(x, y, stripW, stripH, rowInfo, options) {
    // 120 条带是平切端头，圆角取极小值
    const r = options.is120
      ? Math.max(2, Math.round(options.frameW * 0.004))
      : Math.max(6, Math.round(options.frameW * 0.015));
    const xr = x + stripW;
    const mirrored = options.leaderDirection === "right";

    ctx.beginPath();
    if (mirrored) mirrorStripX(ctx, x, stripW);

    if (rowInfo.leader) {
      // 片头舌：上半条被裁掉，舌部保留下半（含完整下排齿孔），过渡弧线位于上方。
      // 从舌部左缘起，沿切边（上）走到弧脚，S 形弧线平滑升到全高上缘，
      // 再走完整上缘 → 右缘 → 下缘 → 回到舌尖，两角圆角收尾（经典 135 片舌形状）
      const { cutY, footX, curveW, tongueR } = leaderGeometry(x, y, stripH, options);
      ctx.moveTo(x, cutY + tongueR);
      ctx.arcTo(x, cutY, x + tongueR, cutY, tongueR);
      ctx.lineTo(footX - curveW, cutY);
      ctx.bezierCurveTo(footX - curveW * 0.5, cutY, footX - curveW * 0.5, y, footX, y);
      ctx.lineTo(xr - r, y);
      ctx.arcTo(xr, y, xr, y + stripH, r);
      ctx.lineTo(xr, y + stripH - r);
      ctx.arcTo(xr, y + stripH, xr - r, y + stripH, r);
      ctx.lineTo(x + tongueR, y + stripH);
      ctx.arcTo(x, y + stripH, x, y + stripH - tongueR, tongueR);
      ctx.lineTo(x, cutY + tongueR);
      ctx.closePath();
      if (mirrored) ctx.restore();
      return;
    }

    ctx.moveTo(x + r, y);

    if (rowInfo.trailer) {
      // 剪刀切口：深度受尾帧外侧实际留白限制，避免负外边距时侵入画面。
      const endClearance = Math.max(0, options.stripPadX + options.frameW * TUNE.margin135);
      const cut = Math.min(options.frameW * 0.1, endClearance * 0.9 / 0.95);
      ctx.lineTo(xr - cut * 0.2, y);
      ctx.lineTo(xr - cut * 0.75, y + stripH * 0.16);
      ctx.lineTo(xr - cut * 0.3, y + stripH * 0.33);
      ctx.lineTo(xr - cut * 0.95, y + stripH * 0.5);
      ctx.lineTo(xr - cut * 0.4, y + stripH * 0.66);
      ctx.lineTo(xr - cut * 0.9, y + stripH * 0.84);
      ctx.lineTo(xr - cut * 0.55, y + stripH);
    } else {
      ctx.lineTo(xr - r, y);
      ctx.arcTo(xr, y, xr, y + stripH, r);
      ctx.lineTo(xr, y + stripH - r);
      ctx.arcTo(xr, y + stripH, xr - r, y + stripH, r);
    }

    ctx.lineTo(x + r, y + stripH);
    ctx.arcTo(x, y + stripH, x, y, r);
    ctx.lineTo(x, y + r);
    ctx.arcTo(x, y, x + r, y, r);

    ctx.closePath();
    if (mirrored) ctx.restore();
  }

  // 片头舌几何参数：用于构造片舌轮廓，并过滤曲线边缘仅剩细碎露出的齿孔
  function leaderGeometry(x, y, stripH, options) {
    const r = Math.max(6, Math.round(options.frameW * 0.015));
    // 舌部切边：略过片宽中线（参考图约 0.48），切掉的上半部分高度即过渡弧高
    const cutY = y + Math.round(stripH * 0.48);
    const curveH = cutY - y;
    return {
      cutY,
      curveH,
      // 弧宽 ≈ 弧高，近似四分之一圆的平滑过渡
      curveW: curveH,
      // 弧线与全高上缘的交点：舌区到此结束
      footX: x + options.leaderW,
      tongueR: Math.min(r * 3, stripH * 0.12),
    };
  }

  // 片头区域：舌部装片时曝光成浓黑，经不规则的曝光边缘过渡到未曝光片基
  function drawLeaderZone(x, y, stripH, options) {
    const firstFrameX = x + options.stripPadX + options.leaderW;
    const baseStart = x + options.leaderW * 0.55;

    // 未曝光片基统一按纯黑处理，不随型号分化
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fillRect(baseStart, y, firstFrameX - baseStart - options.gap * 0.4, stripH);

    // 曝光的舌部：浓黑，边缘带轻微倾斜的渐变过渡（曝光边缘）；舌落在下半，渐变偏下
    const fog = ctx.createLinearGradient(x, y + stripH, x + options.leaderW * 0.92, y + stripH * 0.65);
    fog.addColorStop(0, "rgba(4, 3, 2, 0.97)");
    fog.addColorStop(0.62, "rgba(5, 4, 3, 0.94)");
    fog.addColorStop(0.85, "rgba(8, 6, 4, 0.5)");
    fog.addColorStop(1, "rgba(10, 7, 4, 0)");
    ctx.fillStyle = fog;
    ctx.fillRect(x, y, options.leaderW * 1.1, stripH);
  }

  function getFrameExposureGeometry(x, y, options) {
    return FilmFrame135.getFrameExposureGeometry(x, y, options);
  }

  function addExposurePath(geometry, radius) {
    FilmFrame135.addExposurePath(ctx, geometry, radius);
  }

  function drawFrame(item, x, y, options, isPreview) {
    return FilmFrame135.drawFrame(ctx, item, x, y, options, {
      dragAlpha: isPreview && state.dragItemId === item.id ? 0.35 : 1,
    });
  }

  function drawBlankFrame(x, y, options) {
    return FilmFrame135.drawBlankFrame(ctx, x, y, options);
  }

  // 齿孔节距与孔宽由 getRenderOptions 按画幅派生（135 按孔距 4.75mm≈画幅宽 1/8；120 仅 ECN-2 电影卷可见）
  // 胶片条的外层 clip 负责轮廓裁切；片头可过滤在曲线边缘仅剩细碎露出的孔
  function drawSprockets(x, zoneY, stripW, options, leaderFootX = null, alignmentOriginX = null) {
    FilmFrame135.drawSprockets(
      ctx,
      x,
      zoneY,
      stripW,
      { ...options, tune: TUNE },
      leaderFootX,
      "continuous",
      alignmentOriginX,
    );
  }

  function drawEdgeTextTop(x, zoneY, stripW, rowInfo, rowIndex, options) {
    FilmFrame135.drawEdgeTextTop(ctx, x, zoneY, stripW, rowInfo, rowIndex, { ...options, tune: TUNE });
  }

  function drawEdgeTextBottom(x, zoneY, stripW, rowInfo, options) {
    FilmFrame135.drawEdgeTextBottom(ctx, x, zoneY, stripW, rowInfo, { ...options, tune: TUNE });
  }

  // 120 上边字由共享单帧模块绘制，主应用只提供当前行的布局与上下文。
  function drawEdgeTextTop120(x, zoneY, stripW, rowInfo, options) {
    FilmFrame.drawEdgeTextTop120(ctx, x, zoneY, stripW, rowInfo, { ...options, tune: TUNE });
  }

  // 120 下边字与 DX 刻线同样委托共享实现，保证索引和单帧使用同一算法。
  function drawEdgeTextBottom120(x, zoneY, stripW, rowInfo, rowIndex, options) {
    FilmFrame.drawEdgeTextBottom120(ctx, x, zoneY, stripW, rowInfo, rowIndex, { ...options, tune: TUNE });
  }

  // 拖拽调序时的插入位置指示线
  function drawDropIndicator(layout, options) {
    const dropIndex = state.dropIndex;
    let row = layout.rows.findIndex(
      (info) => dropIndex >= info.start && dropIndex <= info.start + info.count,
    );
    if (row < 0) row = layout.rows.length - 1;
    const rowInfo = layout.rows[row];
    const slot = dropIndex - rowInfo.start;
    const rowX = getRowX(layout, row, options);
    let lineX;
    let slotFrameX;
    if (options.leaderDirection === "right") {
      // RTL：插入线位于目标槽位右缘（序号 0 锚定在条带右内缘）
      const stripW = getRowStripWidth(layout, rowInfo, options);
      const anchorRight = getRowRtlAnchorRight(layout, rowX, stripW, rowInfo, options);
      const slotRight = anchorRight - slot * (options.slotW + options.slotGap);
      slotFrameX = slotRight - options.slotW;
      lineX = slotRight + options.slotGap / 2;
    } else {
      const frameStartX = rowX + options.stripPadX;
      const contentStartX = getRowContentStartX(frameStartX, rowInfo, options);
      slotFrameX = getSlotX(contentStartX, slot, options);
      lineX = slotFrameX - options.slotGap / 2;
    }
    const frameY = getRowY(layout, row, options) + options.bandH;
    const geometry = getFrameExposureGeometry(slotFrameX, frameY, options);
    const inset = Math.round(options.slotH * 0.06);

    ctx.save();
    ctx.shadowColor = "rgba(255, 176, 64, 0.9)";
    ctx.shadowBlur = 8;
    ctx.fillStyle = "#ffb040";
    const lineW = Math.max(3, Math.round(options.frameW * 0.012));
    roundedRect(
      ctx,
      lineX - lineW / 2,
      geometry.bounds.y - inset,
      lineW,
      geometry.bounds.h + inset * 2,
      lineW / 2,
    );
    ctx.fill();
    ctx.restore();
  }

  // 照片列表骨架行：批量导入解析期间占位（面板保持收起，仅摘要显示进度）
  function showListSkeleton(count) {
    const rows = Math.min(Math.max(count, 2), 8);
    photoListPanel.hidden = false;
    photoListCount.textContent = "读取中";
    photoList.innerHTML = "";
    for (let i = 0; i < rows; i += 1) {
      const row = document.createElement("li");
      row.className = "photo-skeleton";
      row.setAttribute("aria-hidden", "true");
      const thumb = document.createElement("i");
      const name = document.createElement("i");
      row.append(thumb, name);
      photoList.appendChild(row);
    }
  }

  function renderPhotoList() {
    const itemCount = state.items.length;
    photoListPanel.hidden = itemCount === 0;
    photoListCount.textContent = `${itemCount} 张`;
    if (!itemCount) photoListPanel.open = false;
    photoList.innerHTML = "";

    getSortedItems().forEach((item) => {
      const li = document.createElement("li");
      li.className = "photo-item";
      li.draggable = true;
      li.dataset.id = String(item.id);

      const thumb = document.createElement("img");
      thumb.className = "photo-thumb";
      thumb.src = item.thumbUrl;
      thumb.alt = "";
      thumb.draggable = false;

      const name = document.createElement("span");
      name.className = "photo-name";
      name.textContent = item.name;
      name.title = item.name;

      if (item.remote && item.remote.quality !== "full") {
        const status = document.createElement("span");
        status.className = `photo-quality photo-quality-${item.remote.quality}`;
        status.textContent = item.remote.quality === "loading"
          ? "下载中"
          : item.remote.quality === "error"
            ? "原图失败"
            : "低清";
        name.appendChild(status);
      }

      const remove = document.createElement("button");
      remove.className = "photo-remove";
      remove.type = "button";
      remove.setAttribute("aria-label", `移除 ${item.name}`);
      remove.textContent = "×";
      remove.addEventListener("click", () => removeItem(item.id));

      li.append(thumb, name, remove);
      photoList.appendChild(li);
    });

    attachListDragHandlers();
  }

  function attachListDragHandlers() {
    photoList.querySelectorAll(".photo-item").forEach((li) => {
      li.addEventListener("dragstart", (event) => {
        state.dragId = Number(li.dataset.id);
        li.classList.add("is-dragged");
        event.dataTransfer.effectAllowed = "move";
      });
      li.addEventListener("dragend", () => {
        state.dragId = null;
        li.classList.remove("is-dragged");
      });
      li.addEventListener("dragover", (event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = "move";
      });
      li.addEventListener("drop", (event) => {
        event.preventDefault();
        event.stopPropagation();
        const targetId = Number(li.dataset.id);
        if (state.dragId === null || state.dragId === targetId) return;
        reorderItems(state.dragId, targetId);
      });
    });
  }

  // 照片列表拖拽排序：先固化当前显示顺序，再切到自定义模式
  function reorderItems(dragId, targetId) {
    solidifyCustomOrder();
    const fromIndex = state.items.findIndex((item) => item.id === dragId);
    const toIndex = state.items.findIndex((item) => item.id === targetId);
    if (fromIndex < 0 || toIndex < 0) return;
    const [moved] = state.items.splice(fromIndex, 1);
    state.items.splice(toIndex, 0, moved);
    render();
    renderPhotoList();
  }

  function removeItem(id) {
    if (state.isExporting) {
      showNotice("请先取消当前导出，再移除照片");
      return;
    }
    const index = state.items.findIndex((item) => item.id === id);
    if (index < 0) return;
    state.reprocessGeneration += 1;
    releaseItem(state.items[index]);
    state.items.splice(index, 1);
    pruneSelectedFrames();
    normalizeBackgroundSelection();
    updateBackgroundControls();
    render();
    renderPhotoList();
  }

  function releaseItem(item) {
    item.sourceGeneration += 1;
    if (item.remote) {
      item.remote.revision += 1;
      item.remote.abortController?.abort();
    }
    closeDistinctSources(item.source, item.editSource, item.originalSource);
    if (item.ownsThumbUrl !== false && item.thumbUrl) URL.revokeObjectURL(item.thumbUrl);
  }

  function showNotice(message, duration = 5200) {
    noticeEl.textContent = message;
    noticeEl.classList.add("is-visible");
    window.clearTimeout(state.noticeTimer);
    state.noticeTimer = window.setTimeout(() => {
      noticeEl.classList.remove("is-visible");
    }, duration);
  }

  function drawEmptyCanvas() {
    activeCanvas = previewCanvas;
    ctx = previewCanvas.getContext("2d");
    previewCanvas.width = 1200;
    previewCanvas.height = 720;
    ctx.clearRect(0, 0, previewCanvas.width, previewCanvas.height);
    state.frameRects = [];
    state.frameSelectionMode = false;
    clearFrameSelection({ redraw: false });
    emptyState.classList.remove("is-hidden");
    previewWrap.classList.remove("is-loading");
    previewWrap.classList.add("is-empty");
    setFilmStageState("intro");
    statusTitle.textContent = "等待导入扫描件";
    imageCounter.textContent = "0 张";
    exportButton.disabled = true;
    syncLightTableControls();
    applyPreviewZoom();
  }

  function setPreviewZoom(value, minimum = 0.25, syncControl = true) {
    state.previewZoom = clamp(value, minimum, 2);
    if (syncControl) zoomRange.value = Math.round(state.previewZoom * 100);
    applyPreviewZoom();
  }

  function applyPreviewZoom() {
    previewCanvas.style.width = `${Math.round(previewCanvas.width * state.previewZoom)}px`;
    previewCanvas.style.height = `${Math.round(previewCanvas.height * state.previewZoom)}px`;
  }

  function fitPreviewToViewport() {
    if (!previewCanvas.width || !previewWrap.clientWidth) return;
    const available = Math.max(240, previewWrap.clientWidth - 56);
    setPreviewZoom(clamp(available / previewCanvas.width, 0.25, 2));
  }

  function roundedRect(context, x, y, width, height, radius) {
    FilmFrame135.roundedRect(context, x, y, width, height, radius);
  }

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function deterministicNoise(seed) {
    return FilmFrame135.deterministicNoise(seed);
  }

  // ---- 单帧片基导出：捕获当前索引设置，预览与下载共用同一渲染路径 ----

  function getCurrentSingleFrameFormatId() {
    if (isHalfFrameMode()) return "half";
    if (is135WideFormat()) return getWide135SpecId();
    return FilmFrame.FORMATS[frameAspect.value] ? frameAspect.value : "135";
  }

  function copyResolvedStock(stock) {
    return {
      ...stock,
      edgeInk: { ...stock.edgeInk },
      edgePresets: [...stock.edgePresets],
      edgePresets120: [...stock.edgePresets120],
    };
  }

  function createFrameExportSnapshot(itemId, opener) {
    const items = getSortedItems();
    const itemIndex = items.findIndex((item) => item.id === itemId);
    if (itemIndex < 0) return null;
    const renderOptions = getRenderOptions(1);
    const backgroundItem = renderOptions.backgroundEnabled ? getBackgroundItem(items) : null;
    return {
      item: items[itemIndex],
      itemId,
      frameNumber: itemIndex + 1,
      editVersion: items[itemIndex].editVersion,
      backgroundMode: renderOptions.backgroundMode,
      backgroundEnabled: renderOptions.backgroundEnabled,
      backgroundBlurPx: renderOptions.backgroundBlurPx,
      backgroundItem,
      backgroundItemId: backgroundItem?.id ?? null,
      backgroundEditVersion: backgroundItem?.editVersion ?? null,
      formatId: getCurrentSingleFrameFormatId(),
      inputMode: getHalfFrameInputMode(),
      baseSlotW: renderOptions.slotW,
      baseSlotH: renderOptions.slotH,
      stock: copyResolvedStock(renderOptions.stock),
      showEdgeText: renderOptions.showEdgeText,
      showSprockets: renderOptions.showSprockets,
      imageInSprockets: renderOptions.imageInSprockets,
      imageInEdgeText: renderOptions.imageInEdgeText,
      tune: { ...TUNE },
      scale: "2",
      mimeType: "image/png",
      quality: 0.92,
      opener,
      busy: false,
      cancelled: false,
    };
  }

  function createFrameExportOptions(snapshot, scale) {
    return FilmFrame.createSingleFrameOptions({
      formatId: snapshot.formatId,
      inputMode: snapshot.inputMode,
      frameW: snapshot.baseSlotW * scale,
      stock: snapshot.stock,
      frameNumber: snapshot.frameNumber,
      edgeMarkStartIndex: snapshot.frameNumber - 1,
      showEdgeText: snapshot.showEdgeText,
      showSprockets: snapshot.showSprockets,
      imageInSprockets: snapshot.imageInSprockets,
      imageInEdgeText: snapshot.imageInEdgeText,
      tune: snapshot.tune,
    });
  }

  function getFrameExportFullScale(snapshot) {
    const item = snapshot.item;
    let scale = Math.max(1, Math.min(item.width / snapshot.baseSlotW, item.height / snapshot.baseSlotH));
    for (let attempt = 0; attempt < 3; attempt += 1) {
      const options = createFrameExportOptions(snapshot, scale);
      const coverScale = Math.max(options.slotW / item.width, options.slotH / item.height);
      if (coverScale >= 1) break;
      scale *= (1 / coverScale) * (1 + Number.EPSILON * 8);
    }
    return scale;
  }

  function getFrameExportScale(snapshot) {
    return snapshot.scale === "full"
      ? getFrameExportFullScale(snapshot)
      : clamp(Number(snapshot.scale) || 1, 1, 3);
  }

  function getFrameExportLayout(snapshot, scale = getFrameExportScale(snapshot)) {
    const options = createFrameExportOptions(snapshot, scale);
    const bounds = FilmFrame.getSingleFrameRenderBounds(options);
    return { options, bounds, scale };
  }

  function exceedsCanvasLimits(width, height) {
    return !Number.isFinite(width) || !Number.isFinite(height) || width <= 0 || height <= 0 ||
      width > MAX_CANVAS_SIDE || height > MAX_CANVAS_SIDE || width * height > MAX_CANVAS_AREA;
  }

  function renderFrameExportCanvas(snapshot, scale, mimeType, targetCanvas = null) {
    const { options, bounds } = getFrameExportLayout(snapshot, scale);
    if (exceedsCanvasLimits(bounds.width, bounds.height)) {
      const error = new Error("FRAME_EXPORT_CANVAS_LIMIT");
      error.width = bounds.width;
      error.height = bounds.height;
      throw error;
    }
    const canvas = targetCanvas || document.createElement("canvas");
    canvas.width = bounds.width;
    canvas.height = bounds.height;
    const outputCtx = canvas.getContext("2d");
    if (!outputCtx) throw new Error("Canvas 2D context unavailable");
    if (snapshot.backgroundMode === "white") {
      outputCtx.fillStyle = "#ffffff";
      outputCtx.fillRect(0, 0, canvas.width, canvas.height);
    } else if (mimeType === "image/jpeg") {
      outputCtx.fillStyle = "#e3ddd1";
      outputCtx.fillRect(0, 0, canvas.width, canvas.height);
    } else {
      outputCtx.clearRect(0, 0, canvas.width, canvas.height);
    }
    if (snapshot.backgroundMode === "blur" && snapshot.backgroundItem) {
      FilmFrame135.drawBlurredPhotoBackground(
        outputCtx,
        snapshot.backgroundItem.source,
        snapshot.backgroundItem.width,
        snapshot.backgroundItem.height,
        { x: 0, y: 0, w: canvas.width, h: canvas.height },
        snapshot.backgroundBlurPx * scale,
        { x: 0, y: 0, w: canvas.width, h: canvas.height },
      );
    }
    FilmFrame.renderSingleFrameInBounds(outputCtx, snapshot.item, options, bounds);
    return { canvas, options, bounds };
  }

  function getPrimaryFrameExportSnapshot(exportState = state.frameExportState) {
    if (!exportState) return null;
    return exportState.mode === "batch" ? exportState.snapshots[0] : exportState;
  }

  function syncSnapshotExportSettings(snapshot, exportState = state.frameExportState) {
    if (!snapshot || !exportState) return snapshot;
    snapshot.scale = exportState.scale;
    snapshot.mimeType = exportState.mimeType;
    snapshot.quality = exportState.quality;
    snapshot.busy = exportState.busy;
    snapshot.cancelled = exportState.cancelled;
    return snapshot;
  }

  function updateFrameExportControls() {
    const exportState = state.frameExportState;
    const snapshot = getPrimaryFrameExportSnapshot(exportState);
    if (!exportState || !snapshot) return;
    exportState.scale = frameExportScale.value;
    if (exportState.scale === "full") {
      exportState.mimeType = "image/png";
      frameExportFormat.value = "image/png";
      frameExportFormat.disabled = true;
    } else {
      frameExportFormat.disabled = false;
      exportState.mimeType = frameExportFormat.value;
    }
    exportState.quality = Number(frameExportQuality.value) / 100;
    syncSnapshotExportSettings(snapshot, exportState);
    frameExportQualityValue.value = `${frameExportQuality.value}%`;
    frameExportQualityField.hidden = exportState.mimeType !== "image/jpeg";
    try {
      const { bounds } = getFrameExportLayout(snapshot);
      frameExportSize.textContent = exportState.mode === "batch"
        ? `预览 ${bounds.width.toLocaleString()} × ${bounds.height.toLocaleString()} px`
        : `${bounds.width.toLocaleString()} × ${bounds.height.toLocaleString()} px`;
      frameExportStatus.textContent = exceedsCanvasLimits(bounds.width, bounds.height)
        ? "该尺寸超过浏览器画布上限，请改用 3x"
        : exportState.mode === "batch"
          ? `将按当前设置逐帧导出 ${exportState.snapshots.length} 帧`
          : "使用当前裁切、旋转和片基设置";
      frameExportApply.disabled = exceedsCanvasLimits(bounds.width, bounds.height) || exportState.busy;
    } catch (error) {
      frameExportSize.textContent = "无法计算输出尺寸";
      frameExportStatus.textContent = "请改用较低输出质量";
      frameExportApply.disabled = true;
    }
  }

  function drawFrameExportPreview() {
    const exportState = state.frameExportState;
    const snapshot = getPrimaryFrameExportSnapshot(exportState);
    if (!snapshot) return;
    syncSnapshotExportSettings(snapshot, exportState);
    try {
      const baseLayout = getFrameExportLayout(snapshot, 1);
      const previewScale = Math.min(1, 760 / baseLayout.bounds.width, 430 / baseLayout.bounds.height);
      renderFrameExportCanvas(snapshot, previewScale, "image/png", frameExportCanvas);
    } catch (error) {
      console.error("单帧预览绘制失败", error);
      frameExportStatus.textContent = "预览生成失败";
    }
  }

  function getFormatDisplayName(formatId, inputMode) {
    if (formatId === "half" && inputMode === "uncropped") return "135 半格完整扫描";
    return FilmFrame.getFormat(formatId).label;
  }

  function openFrameExportModal(itemId, opener) {
    if (state.lightTable.active) exitLightTable({ restoreFocus: false });
    if (state.isExporting) {
      showNotice("请先取消当前导出，再导出单帧");
      return;
    }
    const snapshot = createFrameExportSnapshot(itemId, opener);
    if (!snapshot) return;
    snapshot.mode = "single";
    state.frameExportState = snapshot;
    frameExportTitle.textContent = "导出单帧";
    frameExportApply.textContent = "导出单帧";
    frameExportScale.value = snapshot.scale;
    frameExportFormat.value = snapshot.mimeType;
    frameExportQuality.value = Math.round(snapshot.quality * 100);
    frameExportMeta.textContent = `第 ${snapshot.frameNumber} 帧 · ${getFormatDisplayName(snapshot.formatId, snapshot.inputMode)} · ${snapshot.stock.name} · ${snapshot.item.name}`;
    frameExportModal.hidden = false;
    document.body.style.overflow = "hidden";
    updateFrameExportControls();
    drawFrameExportPreview();
    frameExportClose.focus();
  }

  function openBatchFrameExportModal(opener) {
    if (state.lightTable.active) exitLightTable({ restoreFocus: false });
    if (state.isExporting) {
      showNotice("请先取消当前导出，再批量导出单帧");
      return;
    }
    const snapshots = getSelectedFrameItems()
      .map((item) => createFrameExportSnapshot(item.id, opener))
      .filter(Boolean);
    if (!snapshots.length) {
      showNotice("请先选择要导出的单帧");
      return;
    }
    const exportState = {
      mode: "batch",
      snapshots,
      scale: "2",
      mimeType: "image/png",
      quality: 0.92,
      opener,
      busy: false,
      cancelled: false,
    };
    state.frameExportState = exportState;
    frameExportTitle.textContent = "批量导出单帧";
    frameExportApply.textContent = `批量导出 ${snapshots.length} 帧`;
    frameExportScale.value = exportState.scale;
    frameExportFormat.value = exportState.mimeType;
    frameExportQuality.value = Math.round(exportState.quality * 100);
    const first = snapshots[0];
    frameExportMeta.textContent = `共 ${snapshots.length} 帧 · 预览第 ${first.frameNumber} 帧 · ${getFormatDisplayName(first.formatId, first.inputMode)} · ${first.stock.name}`;
    frameExportModal.hidden = false;
    document.body.style.overflow = "hidden";
    updateFrameExportControls();
    drawFrameExportPreview();
    frameExportClose.focus();
  }

  function closeFrameExportModal({ restoreFocus = true } = {}) {
    const exportState = state.frameExportState;
    if (exportState?.busy) {
      exportState.cancelled = true;
      const snapshots = exportState.mode === "batch" ? exportState.snapshots : [exportState];
      snapshots.forEach((snapshot) => {
        snapshot.item.remote?.abortController?.abort();
        if (snapshot.backgroundItem !== snapshot.item) {
          snapshot.backgroundItem?.remote?.abortController?.abort();
        }
      });
      frameExportStatus.textContent = exportState.mode === "batch" ? "正在取消批量导出…" : "正在取消单帧导出…";
      return;
    }
    frameExportModal.hidden = true;
    document.body.style.overflow = "";
    state.frameExportState = null;
    if (restoreFocus) {
      const focusTarget = exportState?.opener && !exportState.opener.closest("[hidden]")
        ? exportState.opener
        : previewCanvas;
      focusTarget.focus?.();
    }
  }

  function sanitizeExportBaseName(name) {
    const withoutExtension = String(name || "").replace(/\.[^.]+$/, "");
    return withoutExtension.replace(/[<>:"/\\|?*\x00-\x1f]/g, "-").replace(/[.\s]+$/g, "").trim() || "film-frame";
  }

  function getFrameExportFilename(snapshot, extension) {
    const number = String(snapshot.frameNumber).padStart(2, "0");
    return `${sanitizeExportBaseName(snapshot.item.name)}-frame-${number}-${snapshot.formatId}.${extension}`;
  }

  // ---- 帧操作菜单：点击/右键单帧弹出操作选项；点击信息区块里的暗盒时复用同一菜单，仅切换操作组 ----

  // 操作组切换：一次只显示与当前上下文匹配的那一组（frame = 照片操作 / canister = 暗盒操作）
  function setFrameMenuScope(scope) {
    state.frameMenuScope = scope === "canister" ? "canister" : "frame";
    frameMenu.querySelectorAll("[data-menu-scope]").forEach((group) => {
      group.hidden = group.dataset.menuScope !== state.frameMenuScope;
    });
  }

  // 共用的弹出定位：先量菜单尺寸，超出视口再收边
  function openFrameMenuAt(clientX, clientY) {
    frameMenu.hidden = false;
    const menuRect = frameMenu.getBoundingClientRect();
    let x = clientX;
    let y = clientY;

    if (x + menuRect.width > window.innerWidth - 10) {
      x = window.innerWidth - menuRect.width - 10;
    }
    if (y + menuRect.height > window.innerHeight - 10) {
      y = window.innerHeight - menuRect.height - 10;
    }

    frameMenu.style.left = `${x}px`;
    frameMenu.style.top = `${y}px`;
  }

  function showFrameMenu(itemId, clientX, clientY) {
    state.contextItemId = itemId;
    setFrameMenuScope("frame");
    const backgroundButton = frameMenu.querySelector('[data-action="set-background"]');
    if (backgroundButton) {
      const selected = getBackgroundItem()?.id === itemId;
      backgroundButton.setAttribute("aria-checked", String(selected));
    }
    openFrameMenuAt(clientX, clientY);
    frameMenu.querySelector('[data-menu-scope="frame"] button')?.focus();
  }

  // 点击索引信息区块里的暗盒：与单帧菜单完全一致的弹出逻辑，操作组切到「暗盒尺寸」
  function showCanisterMenu(clientX, clientY) {
    state.contextItemId = null;
    syncCanisterScaleControls();
    setFrameMenuScope("canister");
    openFrameMenuAt(clientX, clientY);
    canisterMenuScale?.focus();
  }

  function hideFrameMenu({ restoreFocus = false } = {}) {
    frameMenu.hidden = true;
    state.contextItemId = null;
    if (restoreFocus) previewCanvas.focus?.();
  }

  // 初始化时同步一次操作组可见性（默认展示照片操作组）
  setFrameMenuScope("frame");

  frameMenu.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.action;
      // 暗盒操作组的动作不依赖照片上下文，单独处理（仍走同一菜单的关闭逻辑）
      if (action === "canister-replace") {
        // 更换暗盒图片：复用「暗盒图片」文件选择框（选取后由其 change 处理器载入并重绘）
        hideFrameMenu();
        infoBlockImageInput.click();
        return;
      }
      if (action === "canister-reset") {
        resetCanisterScale();
        hideFrameMenu();
        return;
      }
      const itemId = state.contextItemId;
      const opener = button;
      hideFrameMenu();
      if (!itemId) return;

      switch (action) {
        case "crop":
          openCropModal(itemId);
          break;
        case "rotate":
          rotateItem(itemId);
          break;
        case "insert":
          insertBeforeItem(itemId);
          break;
        case "set-background":
          setBackgroundItem(itemId);
          break;
        case "export-frame":
          openFrameExportModal(itemId, opener);
          break;
        case "delete":
          removeItem(itemId);
          break;
      }
    });
  });

  frameExportScale.addEventListener("change", () => {
    updateFrameExportControls();
    drawFrameExportPreview();
  });
  frameExportFormat.addEventListener("change", () => {
    updateFrameExportControls();
    drawFrameExportPreview();
  });
  frameExportQuality.addEventListener("input", updateFrameExportControls);
  frameExportClose.addEventListener("click", () => closeFrameExportModal());
  frameExportCancel.addEventListener("click", () => closeFrameExportModal());
  frameExportModal.addEventListener("click", (event) => {
    if (event.target === frameExportModal || event.target.classList.contains("frame-export-backdrop")) {
      closeFrameExportModal();
    }
  });

  function validateFrameExportSnapshot(snapshot) {
    const item = state.items.find((entry) => entry.id === snapshot.itemId);
    if (!item || item !== snapshot.item || item.editVersion !== snapshot.editVersion) {
      throw new Error("FRAME_EXPORT_SOURCE_CHANGED");
    }
    if (snapshot.backgroundEnabled) {
      const backgroundItem = state.items.find((entry) => entry.id === snapshot.backgroundItemId);
      if (!backgroundItem || backgroundItem.editVersion !== snapshot.backgroundEditVersion) {
        throw new Error("FRAME_EXPORT_SOURCE_CHANGED");
      }
      snapshot.backgroundItem = backgroundItem;
    }
    return item;
  }

  async function ensureFrameExportOriginals(snapshots, exportState, label) {
    const hydrationItems = [];
    const hydrationIds = new Set();
    snapshots.forEach((snapshot) => {
      [snapshot.item, snapshot.backgroundEnabled ? snapshot.backgroundItem : null].forEach((item) => {
        if (!item || hydrationIds.has(item.id)) return;
        hydrationIds.add(item.id);
        hydrationItems.push(item);
      });
    });
    for (const item of hydrationItems) {
      await ensureOriginal(item, label);
      if (exportState.cancelled) throw new DOMException("Aborted", "AbortError");
    }
    snapshots.forEach((snapshot) => {
      const item = state.items.find((entry) => entry.id === snapshot.itemId);
      if (item) {
        snapshot.item = item;
        snapshot.editVersion = item.editVersion;
      }
      if (snapshot.backgroundEnabled) {
        const backgroundItem = state.items.find((entry) => entry.id === snapshot.backgroundItemId);
        if (backgroundItem) {
          snapshot.backgroundItem = backgroundItem;
          snapshot.backgroundEditVersion = backgroundItem.editVersion;
        }
      }
    });
  }

  async function exportFrameSnapshot(snapshot, exportState) {
    syncSnapshotExportSettings(snapshot, exportState);
    const item = validateFrameExportSnapshot(snapshot);
    snapshot.editVersion = item.editVersion;
    if (snapshot.backgroundEnabled && snapshot.backgroundItem) {
      snapshot.backgroundEditVersion = snapshot.backgroundItem.editVersion;
    }
    const scale = getFrameExportScale(snapshot);
    const layout = getFrameExportLayout(snapshot, scale);
    if (exceedsCanvasLimits(layout.bounds.width, layout.bounds.height)) {
      const error = new Error("FRAME_EXPORT_CANVAS_LIMIT");
      error.width = layout.bounds.width;
      error.height = layout.bounds.height;
      throw error;
    }
    if (exportState.cancelled) throw new DOMException("Aborted", "AbortError");
    const { canvas } = renderFrameExportCanvas(snapshot, scale, exportState.mimeType);
    if (exportState.cancelled) throw new DOMException("Aborted", "AbortError");
    const blob = await canvasToBlob(canvas, exportState.mimeType, exportState.quality);
    if (exportState.cancelled) throw new DOMException("Aborted", "AbortError");
    const extension = exportState.mimeType === "image/jpeg" ? "jpg" : "png";
    downloadBlob(blob, getFrameExportFilename(snapshot, extension));
  }

  async function runSingleFrameExport(exportState) {
    const item = validateFrameExportSnapshot(exportState);
    frameExportApply.textContent = item.remote?.quality !== "full" ? "正在获取原图…" : "正在导出…";
    updateFrameExportControls();
    await ensureFrameExportOriginals([exportState], exportState, "单帧导出");
    frameExportApply.textContent = "正在导出…";
    frameExportStatus.textContent = "正在绘制片基单帧";
    await exportFrameSnapshot(exportState, exportState);
    showNotice(`已导出第 ${exportState.frameNumber} 帧`);
    exportState.busy = false;
    closeFrameExportModal();
  }

  async function runBatchFrameExport(exportState) {
    exportState.snapshots.forEach(validateFrameExportSnapshot);
    frameExportApply.textContent = "正在获取原图…";
    updateFrameExportControls();
    await ensureFrameExportOriginals(exportState.snapshots, exportState, "批量导出");
    for (let index = 0; index < exportState.snapshots.length; index += 1) {
      if (exportState.cancelled) throw new DOMException("Aborted", "AbortError");
      frameExportApply.textContent = `正在导出 ${index + 1}/${exportState.snapshots.length}`;
      frameExportStatus.textContent = `正在导出第 ${index + 1} / ${exportState.snapshots.length} 帧`;
      await exportFrameSnapshot(exportState.snapshots[index], exportState);
      await new Promise((resolve) => setTimeout(resolve, 0));
    }
    showNotice(`已导出 ${exportState.snapshots.length} 帧`);
    exportState.busy = false;
    closeFrameExportModal();
  }

  frameExportApply.addEventListener("click", async () => {
    const exportState = state.frameExportState;
    if (!exportState || exportState.busy || state.isExporting) return;

    exportState.busy = true;
    exportState.cancelled = false;
    state.isExporting = true;
    setSourceEditingLocked(true);
    exportButton.disabled = true;
    frameSelectButton.disabled = true;
    clearFrameSelectionButton.disabled = true;
    batchFrameExportButton.disabled = true;
    frameExportCancel.textContent = "取消导出";
    updateFrameExportControls();

    try {
      if (exportState.mode === "batch") {
        await runBatchFrameExport(exportState);
      } else {
        await runSingleFrameExport(exportState);
      }
    } catch (error) {
      exportState.busy = false;
      if (error.name === "AbortError") {
        frameExportStatus.textContent = exportState.mode === "batch" ? "批量导出已取消" : "单帧导出已取消";
      } else if (error.message === "FRAME_EXPORT_CANVAS_LIMIT") {
        const width = Math.ceil(error.width || 0).toLocaleString();
        const height = Math.ceil(error.height || 0).toLocaleString();
        frameExportStatus.textContent = `输出尺寸 ${width} × ${height} px 超过浏览器上限，请改用 3x`;
      } else if (error.message === "FRAME_EXPORT_SOURCE_CHANGED") {
        frameExportStatus.textContent = "图片状态已变化，请关闭后重新打开";
      } else {
        console.error("单帧导出失败", error);
        frameExportStatus.textContent = exportState.mode === "batch" ? "批量导出失败，请降低输出质量后重试" : "单帧导出失败，请降低输出质量后重试";
      }
    } finally {
      state.isExporting = false;
      setSourceEditingLocked(false);
      updateFrameModeControls();
      updateExportFormatControls();
      exportButton.disabled = !state.items.length;
      syncFrameSelectionControls();
      frameExportApply.textContent = state.frameExportState?.mode === "batch"
        ? `批量导出 ${state.frameExportState.snapshots.length} 帧`
        : "导出单帧";
      frameExportCancel.textContent = "取消";
      if (state.frameExportState) {
        updateFrameExportControls();
        drawFrameExportPreview();
      }
      render();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (!frameMenu.hidden) {
        event.preventDefault();
        hideFrameMenu({ restoreFocus: true });
      } else if (!exportModal.hidden) {
        event.preventDefault();
        // 悬浮态下 Esc：先退出悬浮，再按一次才关闭弹窗
        if (exportModal.classList.contains("export-peek")) exitInfoBlockPeek();
        else closeExportModal();
      } else if (!frameExportModal.hidden) {
        event.preventDefault();
        closeFrameExportModal();
      } else if (!cropModal.hidden) {
        event.preventDefault();
        closeCropModal();
      } else if (state.lightTable.active) {
        event.preventDefault();
        exitLightTable();
      } else if (state.frameSelectionMode) {
        event.preventDefault();
        state.frameSelectionMode = false;
        syncFrameSelectionControls();
        render();
      }
      return;
    }
    if (
      event.key.toLowerCase() === "f" &&
      !event.repeat &&
      !event.ctrlKey && !event.altKey && !event.metaKey &&
      !hasOpenModal() &&
      !state.isExporting &&
      !event.target.closest("input, select, textarea, button, a, [contenteditable='true']")
    ) {
      event.preventDefault();
      toggleLightTable();
      return;
    }
    // 观片台快捷键：1-4 档位 · J/K 或 ←/→ 过片 · +/- 灯箱亮度 · 0 适合
    if (state.lightTable.active && !hasOpenModal() && !event.repeat
      && !event.target.closest("input, select, textarea, [contenteditable='true']")
      && !event.ctrlKey && !event.altKey && !event.metaKey) {
      if (/^[1-4]$/.test(event.key)) {
        event.preventDefault();
        applyLoupePreset(Number(event.key) - 1);
        return;
      }
      const lowerKey = event.key.toLowerCase();
      if (lowerKey === "j" || event.key === "ArrowRight") {
        event.preventDefault();
        stepLightTableFrame(1);
        return;
      }
      if (lowerKey === "k" || event.key === "ArrowLeft") {
        event.preventDefault();
        stepLightTableFrame(-1);
        return;
      }
      if (event.key === "+" || event.key === "=") {
        event.preventDefault();
        setLightboxBrightness(state.lightTable.brightness + 5);
        return;
      }
      if (event.key === "-" || event.key === "_") {
        event.preventDefault();
        setLightboxBrightness(state.lightTable.brightness - 5);
        return;
      }
      if (event.key === "0") {
        event.preventDefault();
        fitLightTableToViewport();
        setLightTableStatus(currentLightTableHint());
        return;
      }
    }
    if (event.key !== "Tab") return;
    if (!exportModal.hidden) {
      const focusable = Array.from(exportModal.querySelectorAll("button:not([disabled]), select:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex='-1'])"));
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
      return;
    }
    if (frameExportModal.hidden) return;
    const focusable = Array.from(frameExportModal.querySelectorAll("button:not([disabled]), select:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex='-1'])"));
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  previewWrap.addEventListener("scroll", () => {
    hideFrameMenu();
    if (state.lightTable.active && state.lightTable.pointer) scheduleLoupeFrame();
  }, { passive: true });
  window.addEventListener("scroll", hideFrameMenu, { passive: true });
  window.addEventListener("resize", () => {
    hideFrameMenu();
    if (!state.lightTable.active || state.lightTable.resizeRafId) return;
    const anchor = currentLightTableAnchor();
    state.lightTable.resizeRafId = requestAnimationFrame(() => {
      state.lightTable.resizeRafId = 0;
      if (!state.lightTable.active) return;
      const target = state.lightTable.focusMode ? loupeViewportCenter() : (state.lightTable.pointer || previewViewportCenter());
      if (anchor) {
        anchor.clientX = target.clientX;
        anchor.clientY = target.clientY;
      }
      resizeLoupe();
      if (state.lightTable.focusMode) restoreCanvasAnchor(anchor);
      else fitLightTableToViewport(anchor);
      scheduleLoupeFrame();
    });
  });

  // 点击菜单外关闭
  document.addEventListener("pointerdown", (event) => {
    if (!frameMenu.hidden && !frameMenu.contains(event.target)) {
      hideFrameMenu();
    }
  });

  // ---- 裁切工具：交互式裁切框 ----

  async function openCropModal(itemId) {
    if (state.lightTable.active) exitLightTable({ restoreFocus: false });
    if (state.isExporting) {
      showNotice("请先取消当前导出，再裁切照片");
      return;
    }
    const requestGeneration = ++state.cropRequestGeneration;
    const item = state.items.find((entry) => entry.id === itemId);
    if (!item) return;
    try {
      await ensureOriginal(item, "裁切照片");
    } catch (error) {
      if (error.name !== "AbortError") showNotice("原图获取失败，无法打开裁切工具");
      return;
    }
    if (
      requestGeneration !== state.cropRequestGeneration ||
      !state.items.includes(item)
    ) {
      return;
    }

    cropModal.hidden = false;
    document.body.style.overflow = "hidden";

    const cropSource = item.source;
    const sourceW = cropSource.width;
    const sourceH = cropSource.height;
    const baseSource = item.editSource || item.originalSource;

    const maxW = 640;
    const maxH = 480;
    const scale = Math.min(1, maxW / sourceW, maxH / sourceH);
    const displayW = Math.round(sourceW * scale);
    const displayH = Math.round(sourceH * scale);

    cropCanvas.width = displayW;
    cropCanvas.height = displayH;
    const cropCtx = cropCanvas.getContext("2d");
    cropCtx.drawImage(cropSource, 0, 0, displayW, displayH);

    const slotRatio = getCurrentInputAdapter().slotRatio;
    const aspectRatio = sourceW >= sourceH
      ? Math.max(slotRatio, 1 / slotRatio)
      : Math.min(slotRatio, 1 / slotRatio);
    const baseAspect = sourceW / sourceH;
    let cropW, cropH, cropX, cropY;

    const aspectDiff = Math.abs(baseAspect - aspectRatio);
    const isAlreadyMatching = aspectDiff < 0.05;

    if (isAlreadyMatching) {
      const margin = Math.min(displayW, displayH) * 0.02;
      cropW = displayW - Math.round(margin * 2);
      cropH = displayH - Math.round(margin * 2);
    } else if (aspectRatio >= 1) {
      cropH = Math.round(displayH * 0.8);
      cropW = Math.round(cropH * aspectRatio);
      if (cropW > displayW) {
        cropW = displayW;
        cropH = Math.round(cropW / aspectRatio);
      }
    } else {
      cropW = Math.round(displayW * 0.8);
      cropH = Math.round(cropW / aspectRatio);
      if (cropH > displayH) {
        cropH = displayH;
        cropW = Math.round(cropH * aspectRatio);
      }
    }
    cropX = Math.round((displayW - cropW) / 2);
    cropY = Math.round((displayH - cropH) / 2);

    state.cropState = {
      itemId,
      displayW,
      displayH,
      cropX,
      cropY,
      cropW,
      cropH,
      aspectRatio,
      cropSource,
      sourceW,
      sourceH,
      baseSource,
      sourceTurns: (item.autoTurns + item.manualTurns) % 4,
      editVersion: item.editVersion,
      requestGeneration,
      drag: null,
      initialCropX: cropX,
      initialCropY: cropY,
      initialCropW: cropW,
      initialCropH: cropH,
    };

    updateCropOverlay();
  }

  function closeCropModal(cropState = null) {
    if (cropState && state.cropState !== cropState) return;
    state.cropRequestGeneration += 1;
    cropModal.hidden = true;
    document.body.style.overflow = "";
    state.cropState = null;
  }

  function updateCropOverlay() {
    if (!state.cropState) return;
    const { cropX, cropY, cropW, cropH, displayW, displayH } = state.cropState;
    const canvasRect = cropCanvas.getBoundingClientRect();
    const wrapRect = cropCanvas.parentElement.getBoundingClientRect();
    const scaleX = canvasRect.width / displayW;
    const scaleY = canvasRect.height / displayH;
    const originX = canvasRect.left - wrapRect.left;
    const originY = canvasRect.top - wrapRect.top;

    cropOverlay.style.left = `${originX + cropX * scaleX}px`;
    cropOverlay.style.top = `${originY + cropY * scaleY}px`;
    cropOverlay.style.width = `${cropW * scaleX}px`;
    cropOverlay.style.height = `${cropH * scaleY}px`;
  }

  cropOverlay.addEventListener("pointerdown", (event) => {
    if (!state.cropState) return;
    event.preventDefault();

    // 标记正在拖拽,防止误触发关闭
    state.cropState.isDragging = false;

    const rect = cropCanvas.getBoundingClientRect();
    // 保存 canvas 渲染尺寸信息
    const renderW = rect.width;
    const renderH = rect.height;
    const { displayW, displayH } = state.cropState;

    const startX = event.clientX;
    const startY = event.clientY;
    const { cropX, cropY, cropW, cropH } = state.cropState;
    // 最小尺寸为图片较小边的 10%
    const minSize = Math.min(displayW, displayH) * 0.1;

    let mode = "move";
    if (event.target.classList.contains("crop-handle")) {
      if (event.target.classList.contains("nw")) mode = "nw";
      else if (event.target.classList.contains("ne")) mode = "ne";
      else if (event.target.classList.contains("sw")) mode = "sw";
      else if (event.target.classList.contains("se")) mode = "se";
    }

    state.cropState.drag = {
      pointerId: event.pointerId,
      mode,
      startX,
      startY,
      startCropX: cropX,
      startCropY: cropY,
      startCropW: cropW,
      startCropH: cropH,
      // 保存缩放比例
      scaleX: displayW / renderW,
      scaleY: displayH / renderH,
    };

    const onMove = (e) => {
      if (
        !state.cropState ||
        !state.cropState.drag ||
        e.pointerId !== state.cropState.drag.pointerId
      ) return;
      // 标记正在拖拽
      state.cropState.isDragging = true;

      // 计算鼠标在 canvas 渲染坐标系中的移动量
      const dxRender = e.clientX - startX;
      const dyRender = e.clientY - startY;

      const { mode, startCropX, startCropY, startCropW, startCropH, scaleX, scaleY } = state.cropState.drag;
      const { displayW, displayH, aspectRatio } = state.cropState;

      // 将渲染坐标移动量转换为内部像素坐标移动量
      const dx = dxRender * scaleX;
      const dy = dyRender * scaleY;

      if (mode === "move") {
        state.cropState.cropX = clamp(startCropX + dx, 0, displayW - cropW);
        state.cropState.cropY = clamp(startCropY + dy, 0, displayH - cropH);
      } else {
        const anchors = {
          nw: [startCropX + startCropW, startCropY + startCropH, -1, -1],
          ne: [startCropX, startCropY + startCropH, 1, -1],
          sw: [startCropX + startCropW, startCropY, -1, 1],
          se: [startCropX, startCropY, 1, 1],
        };
        const [anchorX, anchorY, directionX, directionY] = anchors[mode];
        const pointerX = startCropX + (mode.includes("w") ? 0 : startCropW) + dx;
        const pointerY = startCropY + (mode.includes("n") ? 0 : startCropH) + dy;
        const projectedH = (
          directionX * aspectRatio * (pointerX - anchorX) +
          directionY * (pointerY - anchorY)
        ) / (aspectRatio * aspectRatio + 1);
        const maxH = Math.min(
          directionY < 0 ? anchorY : displayH - anchorY,
          (directionX < 0 ? anchorX : displayW - anchorX) / aspectRatio,
        );
        const minH = Math.min(
          maxH,
          minSize / Math.min(1, aspectRatio),
        );
        const newH = clamp(projectedH, minH, maxH);
        const newW = newH * aspectRatio;

        state.cropState.cropX = directionX < 0 ? anchorX - newW : anchorX;
        state.cropState.cropY = directionY < 0 ? anchorY - newH : anchorY;
        state.cropState.cropW = newW;
        state.cropState.cropH = newH;
      }

      updateCropOverlay();
    };

    const onEnd = (e) => {
      if (e.pointerId !== event.pointerId) return;
      if (state.cropState) state.cropState.drag = null;
      // 延迟清除拖拽标志,避免 pointerup 后的 click 事件触发关闭
      setTimeout(() => {
        if (state.cropState) {
          state.cropState.isDragging = false;
        }
      }, 10);
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerup", onEnd);
      document.removeEventListener("pointercancel", onEnd);
    };

    document.addEventListener("pointermove", onMove);
    document.addEventListener("pointerup", onEnd);
    document.addEventListener("pointercancel", onEnd);
  });

  cropClose.addEventListener("click", () => closeCropModal());
  cropCancel.addEventListener("click", () => closeCropModal());
  cropReset.addEventListener("click", () => {
    if (!state.cropState) return;
    // 恢复到初始裁剪区域
    state.cropState.cropX = state.cropState.initialCropX;
    state.cropState.cropY = state.cropState.initialCropY;
    state.cropState.cropW = state.cropState.initialCropW;
    state.cropState.cropH = state.cropState.initialCropH;
    updateCropOverlay();
  });

  // 恢复原图：丢弃裁切和手动旋转，回到导入时的原始状态
  cropRestoreOriginal.addEventListener("click", async () => {
    if (state.isExporting) {
      showNotice("请先取消当前导出，再恢复照片");
      return;
    }
    const cropState = state.cropState;
    if (!cropState) return;
    const { itemId, editVersion } = cropState;
    const item = state.items.find((entry) => entry.id === itemId);
    if (!item || item.editVersion !== editVersion) {
      closeCropModal(cropState);
      showNotice("图片状态已变化，请重新打开裁切工具");
      return;
    }

    if (!item.cropRect && item.manualTurns === 0) {
      showNotice("该图片尚未编辑");
      return;
    }

    item.cropRect = null;
    item.manualTurns = 0;
    item.editVersion += 1;
    const rebuildVersion = item.editVersion;

    closeCropModal(cropState);
    const rebuilt = await rebuildItemSource(item, rebuildVersion);
    if (!rebuilt) return;

    render();
    renderPhotoList();
    showNotice("已恢复原图");
  });

  // 点击背景关闭裁切模态框
  cropModal.addEventListener("click", (event) => {
    // 如果正在拖拽,不关闭(防止拖拽到背景区域后释放鼠标触发关闭)
    if (state.cropState && state.cropState.isDragging) {
      return;
    }
    if (event.target === cropModal || event.target.classList.contains("crop-backdrop")) {
      closeCropModal();
    }
  });

  cropApply.addEventListener("click", async () => {
    if (state.isExporting) {
      showNotice("请先取消当前导出，再应用裁切");
      return;
    }
    const cropState = state.cropState;
    if (!cropState) return;
    const {
      itemId,
      displayW,
      displayH,
      cropX,
      cropY,
      cropW,
      cropH,
      cropSource,
      sourceW,
      sourceH,
      baseSource,
      sourceTurns,
      editVersion,
    } = cropState;
    const item = state.items.find((entry) => entry.id === itemId);
    if (
      !item ||
      item.editVersion !== editVersion ||
      state.cropState !== cropState ||
      item.source !== cropSource ||
      (item.editSource || item.originalSource) !== baseSource
    ) {
      closeCropModal(cropState);
      showNotice("图片状态已变化，请重新打开裁切工具");
      return;
    }

    const renderedX = clamp(Math.floor(cropX * sourceW / displayW), 0, sourceW - 1);
    const renderedY = clamp(Math.floor(cropY * sourceH / displayH), 0, sourceH - 1);
    const renderedRight = clamp(
      Math.ceil((cropX + cropW) * sourceW / displayW),
      renderedX + 1,
      sourceW,
    );
    const renderedBottom = clamp(
      Math.ceil((cropY + cropH) * sourceH / displayH),
      renderedY + 1,
      sourceH,
    );
    const baseCrop = mapRotatedCropToSource(
      renderedX,
      renderedY,
      renderedRight - renderedX,
      renderedBottom - renderedY,
      baseSource.width,
      baseSource.height,
      sourceTurns,
    );
    const localCrop = normalizeCropRect({
      x: clamp(baseCrop.x, 0, baseSource.width - 1) / baseSource.width,
      y: clamp(baseCrop.y, 0, baseSource.height - 1) / baseSource.height,
      w: clamp(baseCrop.width, 1, baseSource.width) / baseSource.width,
      h: clamp(baseCrop.height, 1, baseSource.height) / baseSource.height,
    });
    if (!localCrop) {
      showNotice("裁切区域无效，请重新选择");
      return;
    }

    item.cropRect = composeCropRects(item.cropRect, localCrop);
    item.editVersion += 1;
    const rebuildVersion = item.editVersion;
    state.reprocessGeneration += 1;
    closeCropModal(cropState);
    const rebuilt = await rebuildItemSource(item, rebuildVersion);
    if (!rebuilt) return;

    render();
    renderPhotoList();
    showNotice("已应用裁切");
  });

  // ---- 旋转图片：顺时针 90 度 ----

  async function rotateItem(itemId) {
    if (state.isExporting) {
      showNotice("请先取消当前导出，再旋转照片");
      return;
    }
    const item = state.items.find((entry) => entry.id === itemId);
    if (!item) return;
    try {
      await ensureOriginal(item, "旋转");
    } catch (error) {
      if (error.name !== "AbortError") showNotice(`无法获取 ${item.name} 的原图，暂不能旋转`);
      return;
    }
    item.manualTurns = (item.manualTurns + 1) % 4;
    item.editVersion += 1;
    const rebuilt = await rebuildItemSource(item, item.editVersion);
    if (!rebuilt) return;
    render();
    renderPhotoList();
    showNotice("已旋转 90°");
  }

  // ---- 在指定帧前插入图片 ----

  function insertBeforeItem(itemId) {
    fileInput.setAttribute("data-insert-before", itemId);
    fileInput.click();
  }

  async function loadFiles(files, insertBeforeId = null) {
    if (state.isExporting) {
      showNotice("请先取消当前导出，再导入照片");
      return;
    }
    if (!files.length) {
      if (!state.items.length) setFilmStageState("intro");
      return;
    }
    const imageFiles = files.filter((file) => /^image\/(jpeg|png|webp)$/.test(file.type));
    const skipped = files.length - imageFiles.length;
    if (!imageFiles.length) {
      if (!state.items.length) setFilmStageState("intro");
      if (skipped) {
        showNotice(`跳过了 ${skipped} 个不支持的文件（仅支持 JPG / PNG / WebP）`);
      }
      return;
    }

    statusTitle.textContent = "正在读取扫描件...";
    previewWrap.classList.add("is-loading");
    // 批量导入时先展示骨架行，避免列表区域空白等待
    if (imageFiles.length >= 4) showListSkeleton(imageFiles.length);
    if (!state.items.length) setFilmStageState("reading");
    exportButton.disabled = true;

    const loaded = await Promise.allSettled(imageFiles.map(readImageFile));
    const succeeded = loaded
      .filter((result) => result.status === "fulfilled")
      .map((result) => result.value);
    const failed = loaded.length - succeeded.length;

    // 插入模式：在指定帧前插入
    if (insertBeforeId !== null) {
      const index = state.items.findIndex((item) => item.id === insertBeforeId);
      if (index >= 0) {
        state.items.splice(index, 0, ...succeeded);
      } else {
        state.items.push(...succeeded);
      }
    } else {
      // 追加而非覆盖，支持分批导入
      state.items.push(...succeeded);
    }
    normalizeBackgroundSelection();
    updateBackgroundControls();

    const messages = [];
    if (skipped) messages.push(`跳过了 ${skipped} 个不支持的文件（仅支持 JPG / PNG / WebP）`);
    if (failed) messages.push(`${failed} 个文件读取失败`);
    if (messages.length) showNotice(messages.join("；"));

    render();
    renderPhotoList();
    await rebuildAllItemSources(true);
  }

  // ---- 胶卷型号：数据层 + 自定义型号面板 ----

  function getAllStocks() {
    return [...BUILTIN_STOCKS, ...state.customStocks];
  }

  function findStock(id) {
    return getAllStocks().find((stock) => stock.id === id) || null;
  }

  function getActiveStock() {
    return findStock(state.stockId) || findStock(DEFAULT_STOCK_ID) || BUILTIN_STOCKS[0];
  }

  // 渲染层只消费合并结果：省略的外观字段落回工艺默认；edgeText 为空表示无边字
  function resolveStock(stock) {
    const defaults = PROCESS_DEFAULTS[stock.process] || PROCESS_DEFAULTS["C-41"];
    return {
      ...stock,
      edgeText: stock.edgeText || "",
      edgeInk: stock.edgeInk || defaults.edgeInk,
      edgePresets:
        Array.isArray(stock.edgePresets) && stock.edgePresets.length
          ? stock.edgePresets
          : defaults.edgePresets,
      // 120 交替字样不开放自定义，一律随工艺默认
      edgePresets120: defaults.edgePresets120,
      frameNumberStyle: stock.frameNumberStyle || defaults.frameNumberStyle,
      sprocketsIn120: Boolean(stock.sprocketsIn120),
    };
  }

  // 校验并整形外部数据（localStorage / JSON 导入），非法返回 null；edgeText 允许为空（无边字）
  function sanitizeStock(raw) {
    if (!raw || typeof raw !== "object") return null;
    const name = typeof raw.name === "string" ? raw.name.trim() : "";
    const text = typeof raw.edgeText === "string" ? raw.edgeText.trim() : "";
    if (!name || !PROCESS_NAMES.includes(raw.process)) return null;

    const stock = {
      id: typeof raw.id === "string" && raw.id ? raw.id : makeStockId(name),
      name: name.slice(0, 60),
      edgeText: text.slice(0, 60).toUpperCase(),
      process: raw.process,
      builtin: false,
    };
    if (
      raw.edgeInk &&
      typeof raw.edgeInk.color === "string" &&
      typeof raw.edgeInk.glow === "string"
    ) {
      stock.edgeInk = { color: raw.edgeInk.color, glow: raw.edgeInk.glow };
    }
    if (Array.isArray(raw.edgePresets)) {
      const presets = raw.edgePresets
        .filter((entry) => typeof entry === "string" && entry.trim())
        .map((entry) => entry.trim().slice(0, 40));
      if (presets.length) stock.edgePresets = presets.slice(0, 8);
    }
    if (raw.frameNumberStyle === "N/NA" || raw.frameNumberStyle === "N") {
      stock.frameNumberStyle = raw.frameNumberStyle;
    }
    if (raw.sprocketsIn120 === true) {
      stock.sprocketsIn120 = true;
    }
    return stock;
  }

  function makeStockId(name) {
    const slug =
      name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
        .slice(0, 40) || "stock";
    let id = `custom-${slug}-${state.nextStockSeq++}`;
    while (findStock(id)) id = `custom-${slug}-${state.nextStockSeq++}`;
    return id;
  }

  function loadStoredStocks() {
    state.nextStockSeq = 1;
    const selected = localStorage.getItem(STORAGE_SELECTED_KEY);
    const remappedIds = new Map();
    let stocksChanged = false;
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_STOCKS_KEY) || "[]");
      if (Array.isArray(parsed)) {
        const seen = new Set(BUILTIN_STOCKS.map((stock) => stock.id));
        parsed.forEach((raw) => {
          const stock = sanitizeStock(raw);
          if (!stock) return;
          if (seen.has(stock.id)) {
            const previousId = stock.id;
            stock.id = makeStockId(stock.name);
            if (!remappedIds.has(previousId)) remappedIds.set(previousId, stock.id);
            stocksChanged = true;
          }
          seen.add(stock.id);
          state.customStocks.push(stock);
        });
      }
    } catch (error) {
      // 坏数据静默丢弃，回落到仅内置型号
    }
    // id 序号避开已恢复的自定义型号，防止新 id 与旧数据撞名
    state.nextStockSeq = state.customStocks.length + 1;

    // 迁移已合并到内置型号的自定义型号
    const builtinIds = new Set(BUILTIN_STOCKS.map((s) => s.id));
    const mergedStocks = state.customStocks.filter((s) => !builtinIds.has(s.id));
    if (mergedStocks.length !== state.customStocks.length) {
      state.customStocks = mergedStocks;
      stocksChanged = true;
    }

    const migratedSelected = remappedIds.get(selected) || selected;
    state.stockId = findStock(migratedSelected) ? migratedSelected : DEFAULT_STOCK_ID;
    if (stocksChanged || migratedSelected !== selected) {
      try {
        localStorage.setItem(STORAGE_STOCKS_KEY, JSON.stringify(state.customStocks));
        localStorage.setItem(STORAGE_SELECTED_KEY, state.stockId);
      } catch (error) {
        // 忽略存储错误
      }
    }
  }

  function persistStocks() {
    try {
      localStorage.setItem(STORAGE_STOCKS_KEY, JSON.stringify(state.customStocks));
      localStorage.setItem(STORAGE_SELECTED_KEY, state.stockId);
    } catch (error) {
      showNotice("型号保存失败：浏览器本地存储不可用");
    }
  }

  function normalizeStockSearch(value) {
    return String(value || "").trim().toLocaleLowerCase("zh-CN").replace(/\s+/g, " ");
  }

  function stockMatchesSearch(stock, query) {
    if (!query) return true;
    const searchable = normalizeStockSearch(
      [stock.name, stock.edgeText, stock.process, PROCESS_SEARCH_TERMS[stock.process]].join(" "),
    );
    return query.split(" ").every((term) => searchable.includes(term));
  }

  function appendStockGroup(label, stocks) {
    if (!stocks.length) return;
    const group = document.createElement("optgroup");
    group.label = label;
    stocks.forEach((stock) => group.appendChild(stockOption(stock)));
    stockSelect.appendChild(group);
  }

  function renderStockSelect() {
    const query = normalizeStockSearch(stockSearch.value);
    const activeStock = getActiveStock();
    const builtinMatches = BUILTIN_STOCKS.filter((stock) => stockMatchesSearch(stock, query));
    const customMatches = state.customStocks.filter((stock) => stockMatchesSearch(stock, query));
    const matchedCount = builtinMatches.length + customMatches.length;
    const activeMatches = stockMatchesSearch(activeStock, query);

    stockSelect.innerHTML = "";
    if (query && !activeMatches) appendStockGroup("当前选择", [activeStock]);
    appendStockGroup("内置型号", builtinMatches);
    appendStockGroup("自定义型号", customMatches);

    stockSelect.value = activeStock.id;
    stockSearchStatus.classList.toggle("is-empty", Boolean(query) && matchedCount === 0);
    if (!query) {
      stockSearchStatus.textContent = `显示全部 ${getAllStocks().length} 个型号`;
    } else if (matchedCount === 0) {
      stockSearchStatus.textContent = "未找到匹配型号，已保留当前选择";
    } else {
      stockSearchStatus.textContent = activeMatches
        ? `找到 ${matchedCount} 个型号`
        : `找到 ${matchedCount} 个型号，已保留当前选择`;
    }
  }

  function stockOption(stock) {
    const option = document.createElement("option");
    option.value = stock.id;
    option.textContent = stock.name;
    return option;
  }

  // 把当前选中型号填进表单：内置型号作为"另存为"的底稿，自定义型号可编辑/删除
  function fillStockForm(stock) {
    const resolved = resolveStock(stock);
    stockName.value = stock.builtin ? `${stock.name} 副本` : stock.name;
    stockEdgeText.value = stock.edgeText;
    stockProcess.value = stock.process;
    stockInkEnabled.checked = Boolean(stock.edgeInk);
    stockInkColor.value = inkToHex(resolved.edgeInk.color);
    stockPresets.value = stock.edgePresets ? stock.edgePresets.join(", ") : "";
    stockFrameNumber.value = stock.frameNumberStyle || "";
    stockSaveButton.textContent = stock.builtin ? "另存为自定义型号" : "保存修改";
    stockDeleteButton.style.display = stock.builtin ? "none" : "inline-flex";
    updateInkFieldVisibility();
  }

  function updateInkFieldVisibility() {
    stockInkField.style.display = stockInkEnabled.checked ? "grid" : "none";
  }

  function inkToHex(color) {
    const match = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    if (!match) return "#ffb040";
    return `#${match
      .slice(1, 4)
      .map((part) => Number(part).toString(16).padStart(2, "0"))
      .join("")}`;
  }

  function hexToInk(hex) {
    const value = parseInt(hex.slice(1), 16);
    const r = (value >> 16) & 255;
    const g = (value >> 8) & 255;
    const b = value & 255;
    return {
      color: `rgba(${r}, ${g}, ${b}, 0.92)`,
      glow: `rgba(${r}, ${g}, ${b}, 0.4)`,
    };
  }

  // 从表单读出型号对象；编辑已有自定义型号时传入其 id。边字字样留空表示底片无边字
  function readStockForm(existingId) {
    const name = stockName.value.trim();
    const text = stockEdgeText.value.trim();
    if (!name) {
      showNotice("请填写型号名称");
      return null;
    }
    const stock = {
      id: existingId || makeStockId(name),
      name: name.slice(0, 60),
      edgeText: text.slice(0, 60).toUpperCase(),
      process: stockProcess.value,
      builtin: false,
    };
    if (stockInkEnabled.checked) stock.edgeInk = hexToInk(stockInkColor.value);
    const presets = stockPresets.value
      .split(/[,，]/)
      .map((entry) => entry.trim())
      .filter(Boolean);
    if (presets.length) stock.edgePresets = presets.slice(0, 8).map((entry) => entry.slice(0, 40));
    if (stockFrameNumber.value) stock.frameNumberStyle = stockFrameNumber.value;
    return stock;
  }

  function exportStocksJson() {
    if (!state.customStocks.length) {
      showNotice("还没有自定义型号可导出");
      return;
    }
    const blob = new Blob([JSON.stringify(state.customStocks, null, 2)], {
      type: "application/json",
    });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "film-stocks.json";
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(link.href);
  }

  async function importStocksJson(file) {
    let parsed;
    try {
      parsed = JSON.parse(await file.text());
    } catch (error) {
      showNotice("导入失败：不是有效的 JSON 文件");
      return;
    }
    const list = Array.isArray(parsed) ? parsed : [parsed];
    const existingIds = new Set(getAllStocks().map((stock) => stock.id));
    let imported = 0;
    let skipped = 0;
    list.forEach((raw) => {
      const stock = sanitizeStock(raw);
      if (!stock) {
        skipped += 1;
        return;
      }
      if (existingIds.has(stock.id)) stock.id = makeStockId(stock.name);
      existingIds.add(stock.id);
      state.customStocks.push(stock);
      imported += 1;
    });
    if (imported) {
      persistStocks();
      renderStockSelect();
    }
    const messages = [];
    if (imported) messages.push(`导入了 ${imported} 个型号`);
    if (skipped) messages.push(`跳过了 ${skipped} 条无效数据`);
    showNotice(messages.length ? messages.join("；") : "文件中没有可导入的型号");
  }

  function setupStockPanel() {
    loadStoredStocks();
    renderStockSelect();
    fillStockForm(getActiveStock());

    stockSearch.addEventListener("input", renderStockSelect);

    stockSelect.addEventListener("change", () => {
      state.stockId = stockSelect.value;
      persistStocks();
      fillStockForm(getActiveStock());
      updateFrameModeControls();
      scheduleRender();
    });

    stockInkEnabled.addEventListener("change", updateInkFieldVisibility);

    stockSaveButton.addEventListener("click", () => {
      const active = getActiveStock();
      const existingId = active.builtin ? null : active.id;
      const stock = readStockForm(existingId);
      if (!stock) return;
      if (existingId) {
        const index = state.customStocks.findIndex((entry) => entry.id === existingId);
        if (index >= 0) state.customStocks[index] = stock;
        else state.customStocks.push(stock);
      } else {
        state.customStocks.push(stock);
      }
      state.stockId = stock.id;
      persistStocks();
      renderStockSelect();
      fillStockForm(stock);
      showNotice(existingId ? `已更新型号「${stock.name}」` : `已新增型号「${stock.name}」`);
      scheduleRender();
    });

    stockDeleteButton.addEventListener("click", () => {
      const active = getActiveStock();
      if (active.builtin) return;
      state.customStocks = state.customStocks.filter((entry) => entry.id !== active.id);
      state.stockId = DEFAULT_STOCK_ID;
      persistStocks();
      renderStockSelect();
      fillStockForm(getActiveStock());
      showNotice(`已删除型号「${active.name}」`);
      scheduleRender();
    });

    stockExportButton.addEventListener("click", exportStocksJson);

    stockImportButton.addEventListener("click", () => stockImportInput.click());
    stockImportInput.addEventListener("change", () => {
      const [file] = stockImportInput.files || [];
      if (file) importStocksJson(file);
      stockImportInput.value = "";
    });
  }

  // ---- 调参面板：常驻侧栏"高级设置"菜单（默认收起），实时作用于预览与导出 ----
  function setupTunePanel() {
    const container = document.getElementById("tuneFields");
    if (!container) return;

    const fields = [
      { key: "sprocketH", label: "齿孔带高度 (×frameW)", min: 0.04, max: 0.2, step: 0.002 },
      { key: "holeH", label: "齿孔高度 (×齿孔带)", min: 0.3, max: 1, step: 0.02 },
      { key: "holeW", label: "齿孔宽度 (×frameW)", min: 0.02, max: 0.1, step: 0.002 },
      { key: "textH", label: "边字带高度 (×frameW)", min: 0.03, max: 0.16, step: 0.002 },
      { key: "band120", label: "120边字带高度 (×画幅高)", min: 0.02, max: 0.1, step: 0.002 },
      { key: "gap120", label: "120帧间隙 (×画幅高)", min: 0.03, max: 0.15, step: 0.002 },
      { key: "fontSize", label: "字号 (×边字带)", min: 0.4, max: 1.2, step: 0.02 },
      { key: "fontSize120", label: "120字号 (×边字带)", min: 0.4, max: 1.2, step: 0.02 },
      { key: "textOffsetY", label: "边字到片边距离 (×边字带)", min: 0.2, max: 0.8, step: 0.02 },
      { key: "textSprocketGap", label: "齿孔向边字收紧 (×frameW)", min: 0, max: 0.05, step: 0.002 },
      { key: "textSprocketGap120", label: "120齿孔向边字收紧 (×画幅高)", min: 0, max: 0.05, step: 0.002 },
      { key: "margin120", label: "120左右外侧边距 (×画幅高)", min: -0.05, max: 1, step: 0.005 },
    ];
    const defaults = { ...TUNE };

    fields.forEach((field) => {
      const row = document.createElement("label");
      row.className = "tune-row";

      const caption = document.createElement("span");
      const value = document.createElement("b");
      value.textContent = ` ${TUNE[field.key]}`;
      caption.textContent = field.label;
      caption.appendChild(value);

      const slider = document.createElement("input");
      slider.type = "range";
      slider.min = field.min;
      slider.max = field.max;
      slider.step = field.step;
      slider.value = TUNE[field.key];
      slider.addEventListener("input", () => {
        TUNE[field.key] = Number(slider.value);
        value.textContent = ` ${slider.value}`;
        scheduleRender();
      });

      row.append(caption, slider);
      container.appendChild(row);
      field.slider = slider;
      field.valueEl = value;
    });

    const resetButton = document.createElement("button");
    resetButton.type = "button";
    resetButton.className = "text-button";
    resetButton.textContent = "恢复默认";
    resetButton.addEventListener("click", () => {
      fields.forEach((field) => {
        TUNE[field.key] = defaults[field.key];
        field.slider.value = defaults[field.key];
        field.valueEl.textContent = ` ${defaults[field.key]}`;
      });
      scheduleRender();
    });
    container.appendChild(resetButton);
  }

  setupStockPanel();
  setupTunePanel();

  // ---- 主题切换：默认跟随系统，手动选择后持久化 ----
  const themeToggle = document.getElementById("themeToggle");
  const THEME_KEY = "haidai-theme";

  function getStoredTheme() {
    try {
      const value = localStorage.getItem(THEME_KEY);
      return value === "light" || value === "dark" ? value : null;
    } catch {
      return null;
    }
  }

  function systemPrefersDark() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    if (themeToggle) {
      themeToggle.setAttribute("aria-pressed", String(theme === "light"));
      themeToggle.setAttribute(
        "aria-label",
        theme === "dark" ? "切换到浅色模式" : "切换到暗色模式"
      );
    }
  }

  applyTheme(getStoredTheme() ?? (systemPrefersDark() ? "dark" : "light"));

  // 幕布轻闪：主题切换时的黑场过渡（尊重减少动态偏好）
  function flashThemeVeil() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const veil = document.getElementById("sceneVeil");
    if (!veil) return;
    veil.classList.add("is-flash");
    window.setTimeout(() => veil.classList.remove("is-flash"), 170);
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
      try {
        localStorage.setItem(THEME_KEY, next);
      } catch {}
      applyTheme(next);
      flashThemeVeil();
    });
  }

  // 未手动选择过时，实时跟随系统主题变化
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener?.("change", (event) => {
    if (!getStoredTheme()) applyTheme(event.matches ? "dark" : "light");
  });


  // ---- 百度网盘集成 ----
  const API_BASE = (typeof BAIDU_PAN_API !== 'undefined')
    ? BAIDU_PAN_API
    : 'https://film-index-baidu-pan.1946378724.workers.dev';

  const BaiduPanIntegration = {
    isLoggedIn: false,
    currentPath: '/',
    selectedEntries: new Map(),
    currentDirectoryEntries: new Map(),
    browserModal: null,
    directoryRequestId: 0,
    directoryAbortController: null,
    previewAbortController: null,

    /** 检查登录状态 */
    async checkAuthStatus() {
      try {
        const res = await fetch(`${API_BASE}/status`, {
          credentials: 'include'
        });
        const data = await res.json();
        this.isLoggedIn = data.logged_in;
        return data;
      } catch (e) {
        this.isLoggedIn = false;
        return { logged_in: false, error: e.message };
      }
    },

    /** 发起登录 */
    login() {
      window.location.href = `${API_BASE}/auth?t=${Date.now()}`;
    },

    /** 登出 */
    async logout() {
      try {
        await fetch(`${API_BASE}/logout`, {
          credentials: 'include'
        });
        this.isLoggedIn = false;
      } catch (e) {
        console.error('Logout error:', e);
      }
    },

    /** 获取文件列表 */
    async listFiles(path = '/', signal) {
      const res = await fetch(
        `${API_BASE}/files?path=${encodeURIComponent(path)}`,
        { credentials: 'include', signal }
      );
      if (!res.ok) {
        let data = null;
        try {
          data = await res.json();
        } catch (error) {}
        if (data?.code === 'NOT_AUTHENTICATED' || data?.code === 'BAIDU_AUTH_EXPIRED') {
          this.isLoggedIn = false;
        }
        throw new Error(data?.error || `无法读取文件列表 (${res.status})`);
      }
      return res.json();
    },

    async responseError(response, fallback) {
      try {
        const data = await response.json();
        return data.error || fallback;
      } catch (error) {
        return `${fallback} (${response.status})`;
      }
    },

    async fetchThumbnail(url, signal) {
      const res = await fetch(url, { credentials: 'include', signal });
      if (!res.ok) throw new Error(await this.responseError(res, '缩略图加载失败'));
      const blob = await res.blob();
      if (!/^image\/(jpeg|png|webp)$/.test(blob.type)) throw new Error('缩略图格式无效');
      return blob;
    },

    /** 下载文件 */
    async downloadFile(fsId, signal) {
      const res = await fetch(
        `${API_BASE}/download?fs_id=${encodeURIComponent(fsId)}`,
        { credentials: 'include', signal }
      );
      if (!res.ok) throw new Error(await this.responseError(res, '原图下载失败'));
      return res.blob();
    },

    /** 打开文件浏览器弹窗 */
    async openBrowser() {
      if (!this.isLoggedIn) {
        const ok = confirm('需要登录百度网盘账号才能导入照片。\n点击确定前往百度授权页面。');
        if (ok) this.login();
        return;
      }

      this.currentPath = '/';
      this.selectedEntries = new Map();
      this.currentDirectoryEntries = new Map();
      this.showBrowserModal();
      await this.loadDirectory('/');
    },

    /** 显示文件浏览器弹窗 */
    showBrowserModal() {
      if (!this.browserModal) {
        this.createBrowserModal();
      }
      this.browserModal.hidden = false;
    },

    /** 创建文件浏览器弹窗 DOM */
    createBrowserModal() {
      const modal = document.createElement('div');
      modal.className = 'baidu-pan-modal';
      modal.hidden = true;
      modal.innerHTML = `
        <div class="baidu-pan-backdrop"></div>
        <div class="baidu-pan-container">
          <div class="baidu-pan-header">
            <h3>从百度网盘导入</h3>
            <div class="baidu-pan-header-actions">
              <button type="button" class="text-button baidu-pan-refresh" title="刷新">↻</button>
              <button type="button" class="baidu-pan-close" aria-label="关闭">×</button>
            </div>
          </div>
          <div class="baidu-pan-toolbar">
            <button type="button" class="text-button baidu-pan-up" aria-label="返回上一级" disabled>←</button>
            <nav class="baidu-pan-breadcrumb" id="baiduPanPath" aria-label="百度网盘路径"></nav>
            <label class="baidu-pan-select-all">
              <input type="checkbox" id="baiduPanSelectAll" disabled />
              <span>全选</span>
            </label>
          </div>
          <div class="baidu-pan-body">
            <div class="baidu-pan-loading">加载中...</div>
            <div class="baidu-pan-empty" hidden>此目录为空</div>
            <div class="baidu-pan-error" hidden></div>
            <div class="baidu-pan-grid" id="baiduPanGrid"></div>
          </div>
          <div class="baidu-pan-footer">
            <span class="baidu-pan-selected">已选择 0 张照片</span>
            <div class="baidu-pan-footer-actions">
              <button type="button" class="text-button" id="baiduPanCancel">取消</button>
              <button type="button" class="primary-button" id="baiduPanImport" disabled>导入选中照片</button>
            </div>
          </div>
        </div>
      `;

      // 事件绑定
      modal.querySelector('.baidu-pan-close').addEventListener('click', () => {
        this.closeBrowser();
      });
      modal.querySelector('#baiduPanCancel').addEventListener('click', () => {
        this.closeBrowser();
      });
      modal.querySelector('.baidu-pan-refresh').addEventListener('click', () => {
        this.loadDirectory(this.currentPath);
      });
      modal.querySelector('.baidu-pan-up').addEventListener('click', () => {
        this.loadDirectory(this.parentPath(this.currentPath));
      });
      modal.querySelector('#baiduPanSelectAll').addEventListener('change', (event) => {
        const shouldSelect = event.currentTarget.checked;
        this.currentDirectoryEntries.forEach((entry, fsId) => {
          if (shouldSelect) {
            this.selectedEntries.set(fsId, entry);
          } else {
            this.selectedEntries.delete(fsId);
          }
        });
        this.syncRenderedSelection();
        this.updateSelectedCount();
      });
      modal.querySelector('#baiduPanImport').addEventListener('click', () => {
        this.importSelected();
      });

      document.body.appendChild(modal);
      this.browserModal = modal;

      // 点击背景关闭
      modal.querySelector('.baidu-pan-backdrop').addEventListener('click', () => {
        this.closeBrowser();
      });
    },

    normalizePath(path) {
      const parts = String(path || '/').split('/').filter(Boolean);
      return parts.length ? `/${parts.join('/')}` : '/';
    },

    parentPath(path) {
      const parts = this.normalizePath(path).split('/').filter(Boolean);
      parts.pop();
      return parts.length ? `/${parts.join('/')}` : '/';
    },

    renderBreadcrumb(path) {
      const normalized = this.normalizePath(path);
      const nav = this.browserModal.querySelector('#baiduPanPath');
      const up = this.browserModal.querySelector('.baidu-pan-up');
      nav.innerHTML = '';
      const parts = normalized.split('/').filter(Boolean);
      const segments = [{ label: '网盘', path: '/' }];
      let current = '';
      parts.forEach((part) => {
        current += `/${part}`;
        segments.push({ label: part, path: current });
      });
      segments.forEach((segment, index) => {
        if (index > 0) {
          const separator = document.createElement('span');
          separator.className = 'baidu-pan-breadcrumb-separator';
          separator.textContent = '/';
          nav.appendChild(separator);
        }
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'baidu-pan-breadcrumb-segment';
        button.textContent = segment.label;
        if (segment.path === normalized) {
          button.disabled = true;
          button.setAttribute('aria-current', 'page');
        } else {
          button.addEventListener('click', () => this.loadDirectory(segment.path));
        }
        nav.appendChild(button);
      });
      up.disabled = normalized === '/';
    },

    /** 加载目录 */
    async loadDirectory(path) {
      const normalizedPath = this.normalizePath(path);
      const requestId = ++this.directoryRequestId;
      this.directoryAbortController?.abort();
      const controller = new AbortController();
      this.directoryAbortController = controller;
      const grid = this.browserModal.querySelector('#baiduPanGrid');
      const loading = this.browserModal.querySelector('.baidu-pan-loading');
      const empty = this.browserModal.querySelector('.baidu-pan-empty');
      const error = this.browserModal.querySelector('.baidu-pan-error');

      loading.hidden = false;
      empty.hidden = true;
      empty.textContent = '此目录为空';
      error.hidden = true;

      try {
        const data = await this.listFiles(normalizedPath, controller.signal);
        if (requestId !== this.directoryRequestId) return;
        loading.hidden = true;
        grid.innerHTML = '';
        this.currentPath = this.normalizePath(data.path || normalizedPath);
        this.renderBreadcrumb(this.currentPath);
        this.currentDirectoryEntries = new Map();

        if (!data.files || data.files.length === 0) {
          empty.hidden = false;
          this.updateSelectedCount();
          return;
        }

        const dirs = data.files.filter(f => f.is_dir);
        const images = data.files.filter(f => !f.is_dir && f.is_image);
        images.forEach((file) => this.currentDirectoryEntries.set(String(file.fs_id), file));

        if (dirs.length === 0 && images.length === 0) {
          empty.textContent = '此目录没有可导入的图片';
          empty.hidden = false;
          this.updateSelectedCount();
          return;
        }

        dirs.forEach(dir => grid.appendChild(this.createGridItem(dir, true)));
        images.forEach(img => grid.appendChild(this.createGridItem(img, false)));
        this.updateSelectedCount();
      } catch (e) {
        if (e.name === 'AbortError' || requestId !== this.directoryRequestId) return;
        loading.hidden = true;
        error.hidden = false;
        error.textContent = `加载失败: ${e.message}`;
      }
    },

    /** 创建网格项 */
    createGridItem(file, isDir) {
      const item = document.createElement('div');
      item.className = 'baidu-pan-item';

      const preview = document.createElement('div');
      preview.className = 'baidu-pan-item-preview';

      const fallback = document.createElement('div');
      fallback.className = 'baidu-pan-item-icon';
      fallback.textContent = isDir ? '📁' : '🖼';
      preview.appendChild(fallback);

      const name = document.createElement('div');
      name.className = 'baidu-pan-item-name';
      name.textContent = file.filename;
      name.title = file.filename;

      if (isDir) {
        item.classList.add('baidu-pan-dir');
        item.appendChild(preview);
        item.appendChild(name);
        item.addEventListener('click', () => {
          this.loadDirectory(file.path);
        });
        return item;
      }

      const fsId = String(file.fs_id);
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.className = 'baidu-pan-item-checkbox';
      checkbox.setAttribute('aria-label', `选择 ${file.filename}`);

      if (file.thumbnail_url) {
        const thumbnail = document.createElement('img');
        thumbnail.className = 'baidu-pan-item-thumbnail';
        thumbnail.crossOrigin = 'use-credentials';
        thumbnail.src = file.thumbnail_url;
        thumbnail.alt = '';
        thumbnail.loading = 'lazy';
        thumbnail.addEventListener('error', () => {
          thumbnail.remove();
          fallback.textContent = '缩略图加载失败';
          fallback.classList.add('baidu-pan-thumbnail-error');
        }, { once: true });
        preview.appendChild(thumbnail);
      }

      item.dataset.fsId = fsId;
      item.setAttribute('aria-selected', 'false');
      item.appendChild(checkbox);
      item.appendChild(preview);
      item.appendChild(name);

      checkbox.addEventListener('click', (event) => {
        event.stopPropagation();
      });
      checkbox.addEventListener('change', () => {
        this.setFileSelection(fsId, checkbox.checked, file, item, checkbox);
      });
      item.addEventListener('click', () => {
        this.setFileSelection(fsId, !this.selectedEntries.has(fsId), file, item, checkbox);
      });

      this.setFileSelection(fsId, this.selectedEntries.has(fsId), file, item, checkbox, false);
      return item;
    },

    /** 设置单个文件的选择状态 */
    setFileSelection(fsId, selected, file, item, checkbox, updateCount = true) {
      if (selected) {
        this.selectedEntries.set(fsId, file);
      } else {
        this.selectedEntries.delete(fsId);
      }
      item.classList.toggle('selected', selected);
      item.setAttribute('aria-selected', String(selected));
      checkbox.checked = selected;
      if (updateCount) this.updateSelectedCount();
    },

    /** 同步当前目录的选择显示 */
    syncRenderedSelection() {
      this.browserModal.querySelectorAll('.baidu-pan-item[data-fs-id]').forEach(item => {
        const fsId = item.dataset.fsId;
        const checkbox = item.querySelector('.baidu-pan-item-checkbox');
        const selected = this.selectedEntries.has(fsId);
        item.classList.toggle('selected', selected);
        item.setAttribute('aria-selected', String(selected));
        checkbox.checked = selected;
      });
    },

    /** 更新已选数量 */
    updateSelectedCount() {
      const count = this.selectedEntries.size;
      const el = this.browserModal.querySelector('.baidu-pan-selected');
      const importBtn = this.browserModal.querySelector('#baiduPanImport');
      const selectAll = this.browserModal.querySelector('#baiduPanSelectAll');
      let selectedInDirectory = 0;

      this.currentDirectoryEntries.forEach((entry, fsId) => {
        if (this.selectedEntries.has(fsId)) selectedInDirectory += 1;
      });

      const directoryCount = this.currentDirectoryEntries.size;
      el.textContent = `已选择 ${count} 张照片`;
      importBtn.disabled = count === 0;
      selectAll.disabled = directoryCount === 0;
      selectAll.checked = directoryCount > 0 && selectedInDirectory === directoryCount;
      selectAll.indeterminate = selectedInDirectory > 0 && selectedInDirectory < directoryCount;
    },

    /** 关闭弹窗 */
    closeBrowser() {
      this.directoryAbortController?.abort();
      this.previewAbortController?.abort();
      if (this.browserModal) {
        this.browserModal.hidden = true;
      }
      this.selectedEntries = new Map();
      this.currentDirectoryEntries = new Map();
    },

    /** 将选中照片以低清预览导入主画布 */
    async importSelected() {
      const entries = Array.from(this.selectedEntries.values());
      if (entries.length === 0) return;

      const importBtn = this.browserModal.querySelector('#baiduPanImport');
      const originalText = importBtn.textContent;
      const controller = new AbortController();
      this.previewAbortController?.abort();
      this.previewAbortController = controller;
      importBtn.disabled = true;
      const succeeded = [];
      const failures = [];
      let nextIndex = 0;
      let completed = 0;

      const worker = async () => {
        while (nextIndex < entries.length && !controller.signal.aborted) {
          const entry = entries[nextIndex++];
          try {
            if (!entry.thumbnail_url) throw new Error('没有可用缩略图');
            const blob = await this.fetchThumbnail(entry.thumbnail_url, controller.signal);
            succeeded.push(await readRemotePreview(entry, blob));
          } catch (error) {
            if (error.name !== 'AbortError') failures.push({ entry, error });
          } finally {
            completed += 1;
            importBtn.textContent = `正在载入低清预览 ${completed}/${entries.length}`;
          }
        }
      };

      try {
        await Promise.all(Array.from({ length: Math.min(4, entries.length) }, worker));
        if (controller.signal.aborted) {
          succeeded.forEach(releaseItem);
          return;
        }
        if (succeeded.length) {
          state.items.push(...succeeded);
          render();
          renderPhotoList();
          await rebuildAllItemSources(true);
        }
        this.previewAbortController = null;
        this.closeBrowser();
        if (failures.length) {
          showNotice(`已载入 ${succeeded.length} 张低清预览，${failures.length} 张缩略图失败`);
        } else {
          showNotice('已载入低清预览；编辑、拍摄时间排序或导出时将下载原图');
        }
      } finally {
        if (this.previewAbortController === controller) this.previewAbortController = null;
        importBtn.disabled = false;
        importBtn.textContent = originalText;
      }
    }
  };

  // 添加"从百度网盘导入"按钮
  const baiduPanButton = document.createElement('button');
  baiduPanButton.type = 'button';
  baiduPanButton.className = 'baidu-pan-button';
  baiduPanButton.innerHTML = `
    <span class="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="17 8 12 3 7 8"/>
      <line x1="12" y1="3" x2="12" y2="15"/>
    </svg></span>
    从百度网盘导入
  `;
  dropZone.parentNode.insertBefore(baiduPanButton, dropZone.nextSibling);

  baiduPanButton.addEventListener('click', async () => {
    baiduPanButton.disabled = true;
    baiduPanButton.innerHTML = '<span class="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></span>检查登录状态...';
    try {
      await BaiduPanIntegration.checkAuthStatus();
      await BaiduPanIntegration.openBrowser();
    } catch (e) {
      console.error('Baidu Pan error:', e);
      showNotice('百度网盘连接失败，请稍后重试');
    } finally {
      baiduPanButton.disabled = false;
      baiduPanButton.innerHTML = `
        <span class="icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
          <polyline points="17 8 12 3 7 8"/>
          <line x1="12" y1="3" x2="12" y2="15"/>
        </svg></span>
        从百度网盘导入
      `;
    }
  });

  // 确保裁切模态框和菜单初始状态为隐藏
  cropModal.hidden = true;
  frameMenu.hidden = true;
})();
