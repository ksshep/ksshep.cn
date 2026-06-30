// ===== 慧德自动化 - 网站数据 =====
/* ==========================================
   数据来源：慧德宣传手册-2025.08.pdf (共32页)
   更新日期：2026-06-30
   产品：第3-20页，配件：第21-31页，联系：第32页
   ========================================== */

const COMPANY = {
  name: "无锡慧德自动化科技有限公司",
  nameEn: "Wuxi Huide Automation Technology Co., Ltd.",
  shortName: "慧德自动化",
  shortNameEn: "Huide Automation",
  tagline: "专业致力于自动化焊接软件定制与开发",
  taglineEn: "Specializing in Custom Automated Welding Software Development",
  since: 2014,
  philosophy: "诚信、创新、共赢",
  philosophyEn: "Integrity, Innovation, Win-Win"
};

const ABOUT = {
  cn: `无锡慧德自动化科技有限公司（2014年成立）专注于自动化焊接软件开发，集研发、生产与销售于一体。公司坚持"诚信、创新、共赢"理念，拥有专业团队持续推动控制系统技术创新，为客户提供优质产品与服务。\n\n目前已开发直缝焊、环缝焊、热丝堆焊（获国家专利 ZL202410780102.3）、四枪焊、管法兰焊、带极堆焊、等离子焊、电阻焊、直缝拼板焊、十字臂焊、双枪环缝跟踪焊、阀芯焊、管管焊、搬运码垛及淬火、颗粒机等专用软件。相关控制系统广泛应用于管道、阀门阀芯、球体焊接等领域，具备自动化程度高、性能稳定、抗干扰和操作简便等特点。公司将持续研发，不断满足客户多样化焊接需求。\n\n配套产品涵盖手持示教器、控制系统、伺服/步进电机、信号隔离器、移动滑台、步进送丝机、行星减速机、中空旋转平台、无线遥控器、割枪旋转体等，为客户提供一站式采购支持。`,
  en: `Wuxi Huide Automation Technology Co., Ltd. (founded in 2014) focuses on automated welding software development, integrating R&D, production, and sales. Adhering to the principles of "Integrity, Innovation, Win-Win", we have a professional team dedicated to advancing control system technology and providing high-quality products and services.\n\nOur developed software includes: straight seam welding, circumferential welding, hot wire cladding (National Patent ZL202410780102.3), four-gun welding, pipe-flange welding, strip cladding, plasma welding, resistance welding, straight seam panel welding, cross-arm welding, dual-gun circumferential tracking welding, valve core welding, pipe-pipe welding, handling & palletizing, quenching, and pellet machine control systems. These systems are widely used in pipeline, valve core, and spherical welding, featuring high automation, stable performance, strong anti-interference, and easy operation.\n\nSupporting products include teach pendants, control systems, servo/stepper motors, signal isolators, sliding tables, stepper wire feeders, planetary reducers, hollow rotary platforms, wireless remote controls, and torch rotators.`,
};

const PRODUCTS = [
  {
    id: "vertical-cladding", page: 3,
    cn: `立式堆焊系统`, en: `Vertical welding system`,
    usage: `耐蚀强化适用于化工设备、海洋平台及石油管道，抵抗酸、碱、盐雾腐蚀；高温防护用于电站锅炉、燃气轮机及发动机高温部件，防止氧化与热腐蚀；耐磨防护保护矿山、工程及农机易损件，延长使用寿命。`,
    usageEn: `Corrosion Resistance Enhancement: Applied to chemical equipment, offshore platforms, and petroleum pipelines to resist erosion from acids, alkalis, and salt spray. High-Temperature Protection: Used in power plant boilers, gas turbines, and high-temperature engine components to prevent oxidation and thermal corrosion. Wear Resistance Protection: Protects vulnerable parts in mining, engineering, and agricultural machinery, significantly extending service life.`,
    function: `WXHD-06A系列系统可在焊接过程中实时调节电流、电压，并依据管径自适应调整焊接线性速度，大幅减少多工件调试需求。系统具备图库操作简便与状态实时监控，集成多重安全保护，含限位、急停、伺服报警、水冷与气检报警、钨极短路及AVC异常监测。`,
    functionEn: `The WXHD-06A series system enables real-time adjustment of current and voltage during welding, and automatically adapts the linear welding speed based on pipe diameter, significantly reducing debugging needs for multiple workpieces. It features user-friendly graphical operation and real-time status monitoring, and incorporates multi-level safety protections including limit stops, emergency shutdown, servo alarms, water cooling and gas detection alerts, tungsten short-circuit detection, and AVC abnormality monitoring.`
  },
  {
    id: "horizontal-welding", page: 4,
    cn: `卧式堆焊系统`, en: `Horizontal welding system`,
    usage: `可应用于机械制造行业，石油化工行业，电力以及矿山行业。`,
    usageEn: `It can be applied to the mechanical manufacturing industry, petrochemical industry, power and mining industry.`,
    function: `卧式堆焊控制系统在焊接过程中，实时通过对焊接参数（如电流，电压，送丝速度等）的精准控制，以及对工件的旋转，移动等动作的控制，确保堆焊过程的稳定性和质量。`,
    functionEn: `The horizontal welding control system ensures the stability and quality of the welding process by accurately controlling welding parameters (such as current, voltage, wire feed speed, etc.) in real-time, as well as controlling the rotation, movement, and other actions of the workpiece during the welding process.`
  },
  {
    id: "strip-cladding", page: 5,
    cn: `带极堆焊系统`, en: `Strip welding system`,
    usage: `加氢控制反应器、煤气工程热壁交换炉、核电站设备中压力容器的内表面大面积堆焊中均得到了广泛应用。`,
    usageEn: `The large-area welding of the inner surface of pressure vessels in hydrogenation control reactors, gas engineering hot wall exchange furnaces, and nuclear power plant equipment has been widely used.`,
    function: `埋弧焊带极堆焊控制系统通过送丝控制，行走控制，引弧熄弧控制等，从而实现对焊接过程的精确控制，确保焊接参数的稳定，具有生产效率高，焊缝质量好的优点。`,
    functionEn: `The submerged arc welding with pole welding control system achieves precise control of the welding process through wire feeding control, walking control, arc initiation and extinguishing control, etc., ensuring the stability of welding parameters and having the advantages of high production efficiency and good weld quality.`
  },
  {
    id: "pipe-flange-welding", page: 6,
    cn: `管法兰焊接系统`, en: `Pipe flange welding system`,
    usage: `适用于不同规格和材质的管-法兰焊接，管-弯头焊接，管-管对接或角接。该机型可一机多用，使用场景广泛。`,
    usageEn: `Suitable for pipe flange welding, pipe elbow welding, pipe-pipe butt or corner welding of different specifications and materials. This model can be used for multiple purposes and has a wide range of usage scenarios.`,
    function: `管法兰焊接系统主要用于实现管法兰与管件，管法兰与管法兰之间焊接的自动化控制，提高了焊接质量和生产效率。`,
    functionEn: `The pipe flange welding system is mainly used to achieve automated control of welding between pipe flanges and fittings, and between pipe flanges, improving welding quality and production efficiency.`
  },
  {
    id: "plasma-welding", page: 7,
    cn: `等离子焊系统`, en: `Plasma welding system`,
    usage: `广泛应用于航天航空，核能，电子，造船，石油化工，气体配送等管道预制，大罐体储罐焊接，运输罐体焊接。`,
    usageEn: `Widely used in aerospace, nuclear energy, electronics, shipbuilding, petrochemicals, gas distribution and other pipeline prefabrication, welding of large tank bodies and storage tanks, and welding of transport tanks.`,
    function: `等离子焊系统是将电弧压缩为细小的等离子体，获得较高能量密度的等离子弧进行焊接，具有能量集中，穿透力强，可单面焊双面成型的优点，可焊接低碳钢，低合金钢，不锈钢，镍及镍合金。`,
    functionEn: `The plasma welding system compresses the arc into a small plasma and obtains a plasma arc with high energy density for welding. It has the advantages of energy concentration, strong penetration, and can be welded on one side and formed on both sides. It can weld low carbon steel, low alloy steel, stainless steel, nickel, and nickel alloys.`
  },
  {
    id: "panel-welding", page: 8,
    cn: `直缝拼板焊系统`, en: `Straight seam panel welding system`,
    usage: `主要应用于汽车制造行业，航空航天制造，船舶制造，钢结构建筑等。`,
    usageEn: `Mainly used in the automotive manufacturing industry, aerospace manufacturing, shipbuilding, steel structure construction, etc.`,
    function: `直缝拼板焊控制系统是一种用于将多块金属板材通过焊接连接成更大尺寸平板的自动化焊接技术，在焊接过程中，系统能实时修正焊枪位置，有效补偿板材装配误差，确保焊枪对焊缝的稳定跟踪。`,
    functionEn: `The straight seam panel welding control system is an automated welding technology used to connect multiple metal plates into larger flat plates through welding. During the welding process, the system can correct the position of the welding gun in real time, effectively compensate for plate assembly errors, and ensure stable tracking of the welding gun on the weld seam.`
  },
  {
    id: "cross-arm-welding", page: 9,
    cn: `十字臂焊接系统`, en: `Cross arm welding system`,
    usage: `广泛应用于汽车制造，工程机械，船舶及钢结构制造。`,
    usageEn: `Widely used in automobile manufacturing, engineering machinery, shipbuilding, and steel structure manufacturing.`,
    function: `十字臂焊接控制系统可精确控制机械臂（通常由横臂和竖臂组成，形成十字形状）的运动轨迹，焊接电流，电压，速度，以及焊接过程的启停，进而实现焊接操作的自动化，具有灵活性高，焊接质量好，生产效率高，可扩展性强等优点。`,
    functionEn: `The cross-arm welding control system can accurately control the motion trajectory, welding current, voltage, speed, and start stop of the robotic arm (usually composed of horizontal and vertical arms, forming a cross shape), thereby achieving automation of welding operations. It has the advantages of high flexibility, good welding quality, high production efficiency, and strong scalability.`
  },
  {
    id: "dual-gun-laser-tracking", page: 10,
    cn: `双枪激光跟踪埋弧焊系统`, en: `Dual gun laser tracking submerged arc welding system`,
    usage: `可用于压力容器筒体或中小直径管道内、外的纵、环缝焊接、筒体及封头内壁的堆焊等场合。`,
    usageEn: `It can be used for welding longitudinal and circumferential seams inside and outside pressure vessel cylinders or small and medium-sized pipelines, as well as for welding the inner walls of cylinders and heads.`,
    function: `双枪环缝跟踪埋弧焊采用两把焊枪同时进行焊接，两把焊枪可以分别焊接焊缝的两侧，或者分别焊接不同层的焊缝，在焊接过程中，控制系统通过焊接电流电压，焊接速度等参数，确保焊接质量的稳定性和一致性；跟踪系统实时监测焊缝的位置和形状，自动调整焊枪的运动轨迹，以保证焊枪始终沿着焊缝中心线进行焊接。具有提高焊接效率，保证焊接质量等优点。`,
    functionEn: `Double gun circumferential seam tracking submerged arc welding uses two welding guns to weld simultaneously. The two welding guns can weld both sides of the weld seam separately or weld different layers of the weld seam separately. During the welding process, the control system ensures the stability and consistency of the welding quality through parameters such as welding current, voltage, and welding speed; The tracking system monitors the position and shape of the weld seam in real time, automatically adjusts the motion trajectory of the welding gun, to ensure that the welding gun always performs welding along the centerline of the weld seam. It has the advantages of improving welding efficiency and ensuring welding quality.`
  },
  {
    id: "straight-circumferential", page: 11,
    cn: `直缝环缝焊系统`, en: `Straight seam circumferential seam welding system`,
    usage: `可广泛地应用于液压油缸，汽车方向架，传动轴，液化气罐，消防器材等产品的焊接。`,
    usageEn: `It can be widely used for welding hydraulic cylinders, automotive steering frames, transmission shafts, liquefied gas tanks, fire-fighting equipment and other products.`,
    function: `直缝环缝焊接控制系统，可以完成各种直线，环形，圆形焊缝的自动化焊接，可用于碳钢，低合金钢，不锈钢，铝及其合金等材料的优质焊接，并可选择氩弧焊，气保焊，等离子焊等焊接电源组成一套直缝环缝自动焊接系统。`,
    functionEn: `The straight seam circumferential welding control system can complete automated welding of various straight, circular, and circular welds, and can be used for high-quality welding of materials such as carbon steel, low-alloy steel, stainless steel, aluminum and its alloys. It can also choose welding power sources such as argon arc welding, gas shielded welding, plasma welding, etc. to form a set of straight seam circumferential welding automatic welding system.`
  },
  {
    id: "roll-welding", page: 12,
    cn: `轧辊自动焊系统`, en: `Roll automatic welding system`,
    usage: `用于生产各种规格的钢丝、钢绞线等线材产品。轧辊通过多次轧制和拉拔，将金属坯料加工成细长的线材，应用于建筑、纺织、机械等行业。`,
    usageEn: `Used for producing various specifications of wire products such as steel wire and steel strand. Rollers process metal billets into slender wires through multiple rolling and drawing processes, which are used in industries such as construction, textiles, and machinery.`,
    function: `轧辊焊接系统是针对轧辊进行自动焊接，设置管直径，焊接速度，电流电压，自动寻位，自动焊接，减少人工劳动强度，提高效率，提高焊缝质量。以确保连续焊接，中途不停，从而保证了每层的质量和性能。`,
    functionEn: `The rolling mill welding system is designed for automatic welding of rolling mills, including setting pipe diameter, welding speed, current and voltage, automatic positioning, automatic welding, reducing manual labor intensity, improving efficiency, and enhancing weld quality. To ensure continuous welding without stopping midway, thus ensuring the quality and performance of each layer.`
  },
  {
    id: "u-tube-welding", page: 13,
    cn: `U型管焊接系统`, en: `U-tube welding system`,
    usage: `管道系统在化工、石油、电力等行业，U型管道焊接用于连接复杂管路，满足高温、高压、腐蚀性介质的传输需求。例如，采用氩弧焊等工艺焊接U型管，可确保焊缝质量，保障管道系统的安全运行。`,
    usageEn: `In industries such as chemical, petroleum, and power, U-shaped pipeline welding is used to connect complex pipelines and meet the transmission needs of high temperature, high pressure, and corrosive media in pipeline systems. For example, using argon arc welding and other processes to weld U-shaped pipes can ensure the quality of the weld seam and ensure the safe operation of the pipeline system.`,
    function: `焊接控制系统，最多可控制6台伺服电机同时工作，能实现在焊接过程中实时调整焊机电流大小，电压大小，可以根据管径尺寸改变速度，焊接速度是线性速度，减少操作人员不同工件测试，具有操作简单方便，实时监测设备状态，有限位、急停、伺服报警，水检报警，气检，钨针短路、AVC报警。`,
    functionEn: `The welding control system can control up to 6 servo motors to work simultaneously, and can adjust the current and voltage of the welding machine in real time during the welding process. The speed can be changed according to the diameter of the pipe. The welding speed is a linear speed, reducing the need for operators to test different workpieces. It has simple and convenient operation, real-time monitoring of equipment status, limited position emergency stop servo alarm, water detection alarm, gas detection, tungsten needle short circuit AVC alarm.`
  },
  {
    id: "four-gun-welding", page: 14,
    cn: `四枪焊系统`, en: `Four gun welding system`,
    usage: `广泛应用于通风管道制造行业，人防工程行业，电力能源行业，煤矿行业，工程机械行业。`,
    usageEn: `Widely used in the ventilation duct manufacturing industry, civil air defense engineering industry, power energy industry, coal mining industry, and construction machinery industry.`,
    function: `四枪焊控制系统能够同时控制四把焊枪的焊接动作，实现多枪同步焊接，可对焊接电流，电压，焊接速度，焊缝高度等参数进行精确设置和调整，以满足不同焊接材料，厚度和工艺要求，且具备自动定位，自动送丝，自动焊接等功能，提高生产效率和产品质量的一致性。`,
    functionEn: `The four gun welding control system can simultaneously control the welding actions of four welding guns, achieving synchronous welding of multiple guns. It can accurately set and adjust parameters such as welding current, voltage, welding speed, and weld height to meet different welding materials, thicknesses, and process requirements. It also has functions such as automatic positioning, automatic wire feeding, and automatic welding, improving production efficiency and product quality consistency.`
  },
  {
    id: "valve-core-welding", page: 15,
    cn: `阀芯焊接系统`, en: `Valve core welding system`,
    usage: `主要应用于汽车领域，家电领域，还有一些化工，石油，冶金等行业的阀门制造。`,
    usageEn: `Mainly used in the automotive industry, home appliance industry, as well as valve manufacturing in some chemical, petroleum, metallurgical and other industries.`,
    function: `阀芯焊接系统通过自动化上料机构将阀芯和阀体等零部件送入系统，定位工装将零部件固定在准备的位置，焊前检测工位对零部件尺寸，位置等进行检测，确保焊接条件合格；焊后检测工位则对焊接质量进行检测，如焊缝强度，密封性，将合格产品和不合格产品分类输出。`,
    functionEn: `The valve core welding system sends the valve core and valve body and other components into the system through an automated feeding mechanism. The positioning fixture lowers the components and fixes them in the prepared position. The pre welding inspection station checks the size, position, etc. of the components to ensure that the welding conditions are qualified; The post weld inspection station checks the welding quality, such as weld strength and sealing, and classifies qualified and unqualified products for output.`
  },
  {
    id: "quenching-system", page: 16,
    cn: `淬火系统`, en: `Quench system`,
    usage: `应用于汽车制造（发动机的曲轴，凸轮轴），机械制造，模具制造，航空航天（飞机发动机叶片，起落架）等部件的淬火焊接。`,
    usageEn: `Applied to quenching welding of automotive manufacturing (engine crankshafts, camshafts), mechanical manufacturing, mold manufacturing, aerospace (aircraft engine blades, landing gear) and other components.`,
    function: `淬火焊接系统是将淬火与焊接工艺相结合，用于提高金属材料性能和实现金属连接，控制系统通过对感应电源，感应线圈，淬火介质，焊接设备等进行控制和调节，实现工艺参数的精确控制，保证淬火和焊接的质量。`,
    functionEn: `The quenching welding system combines quenching with welding technology to improve the performance of metal materials and achieve metal connections. The control system controls and adjusts the induction power supply, induction coil, quenching medium, welding equipment, etc. to achieve precise control of process parameters and ensure the quality of quenching and welding.`
  },
  {
    id: "palletizing-handling", page: 17,
    cn: `码垛搬运系统`, en: `Palletizing and handling system`,
    usage: `在生产线的末端，将成品（如工件、箱装、袋装、桶装物品）自动抓取并码放到托盘上，以便进行仓储或运输。`,
    usageEn: `At the end of the production line, finished products (such as workpieces, boxed, bagged, or drummed items) are automatically grasped and palletized for storage or transportation.`,
    function: `码垛搬运系统集成抓取、移载、定位与堆叠核心功能，依托工业机器人或专用设备实现物流自动化。系统通过定制化末端执行器（如机械夹爪、真空吸盘等）可靠抓取箱、袋、桶、盒等多种规格物品，并依据预设垛型，以高精度定位准确摆放至托盘。通过算法控制，系统自动完成分层堆叠与垛型优化。`,
    functionEn: `The palletizing and handling system integrates core functions including grasping, transferring, positioning, and stacking, utilizing industrial robots or specialized equipment to achieve logistics automation. Equipped with customized end-effectors (such as mechanical grippers, vacuum suction cups, etc.), the system reliably handles items of various specifications including boxes, bags, barrels, and cartons. Based on predefined pallet patterns, it accurately positions and places items onto pallets with high precision. Through algorithmic control, the system automatically performs layered stacking and optimizes stacking patterns.`
  },
  {
    id: "pipe-pipe-welding", page: 18,
    cn: `管管焊接系统`, en: `Pipe welding system`,
    usage: `水处理、实验室、半导体、化工、食品、医药、电子管路、新能源、换热器、制冷设备等行业。`,
    usageEn: `Industries such as water treatment, laboratory, semiconductor, chemical, food, medicine, electronic piping, new energy, heat exchangers, refrigeration equipment, etc.`,
    function: `将管与管之间，管与配件之间的接口，通过焊接电源进行熔接管道以氩气等惰性气体保护的区间调整，电流，速度，焊接工艺，钨极惰性气体保护的氩弧焊具有较好的适应性，焊接质量高、焊透性能好，具有单面焊，双面成型，外观成型均匀美观，焊接成品能达到洁净焊道的要求等特点。`,
    functionEn: `The interfaces between pipes and between pipes and fittings are adjusted by welding power supply using inert gas protection such as argon gas for fusion welding of pipes. The current, speed, welding process, and tungsten inert gas protection argon arc welding have good adaptability, high welding quality, good penetration performance, single-sided welding, double-sided forming, uniform and beautiful appearance, and the welded product can meet the requirements of clean weld bead.`
  },
  {
    id: "plasma-laser-cladding", page: 19,
    cn: `等离子&激光熔覆系统`, en: `Plasma & Laser cladding system`,
    usage: `在化工、能源、海洋等领域中，该技术通过在不锈钢或合金钢管道、阀门、泵体等关键部件表面熔覆镍基、钴基或特种合金涂层，显著提升其耐酸、碱腐蚀和高温氧化性能，有效抵抗苛刻介质的侵蚀。同时，在机械制造领域，可对轧辊、液压支柱、齿轮及叶片等易磨损零部件熔覆高硬度耐磨合金层，大幅增强工件在摩擦、冲击或颗粒冲刷等恶劣工况下的使用寿命与可靠性。`,
    usageEn: `In industries such as chemical processing, energy, and marine engineering, this technology is applied to critical components including pipelines, valves, and pump bodies made of stainless or alloy steel. By cladding their surfaces with nickel-based, cobalt-based, or special alloy coatings, it significantly enhances resistance to acid, alkali, high-temperature oxidation, and other harsh corrosive media. In mechanical manufacturing, it deposits high-hardness wear-resistant alloy layers onto vulnerable parts such as rollers, hydraulic columns, gears, and blades, substantially improving their service life under severe operating conditions.`,
    function: `HD2000-6A多轴运动系统用于精确控制焊枪与工件之间的相对运动轨迹，并通过集成所有子系统，实现对工艺参数（包括电流、电压、送粉量、气体流量和运动速度）的数字化设置、存储与闭环控制。`,
    functionEn: `The HD2000-6A multi-axis motion system is used to precisely control the relative movement trajectory between the welding torch and the workpiece. By integrating all subsystems, it enables digital setup, storage, and closed-loop control of process parameters, including current, voltage, powder feed rate, gas flow rate, and motion speed.`
  },
  {
    id: "half-pipe-welding", page: 20,
    cn: `半管焊接系统`, en: `Half pipe welding system`,
    usage: `主要用于在各类容器、罐体及设备表面高效、可靠地焊接半圆形（D形）管道，形成连续密封流道，以实现加热、冷却或保温的工艺目的。`,
    usageEn: `It is primarily used to efficiently and reliably weld semi-circular (D-shaped) pipes onto the surfaces of various containers, tanks, and equipment, forming continuous sealed flow channels for heating, cooling, or thermal insulation purposes.`,
    function: `系统启动后，旋转工装带动工件匀速转动，焊枪在多轴运动系统的控制下，精确跟踪半管与容器壁的接合缝，实现全位置连续焊接。系统集成激光焊缝跟踪、自适应摆焊与弧压反馈实时跟踪控制功能，全面保障焊接过程的自动化、高精度与稳定性。`,
    functionEn: `Upon system startup, the rotary fixture drives the workpiece to rotate at a constant speed, while the welding torch—precisely controlled by a multi-axis motion system—accurately tracks the joint seam between the half-pipe and the container wall, enabling all-position continuous welding. The system integrates real-time monitoring and control functions including laser seam tracking, adaptive weave welding, and arc voltage feedback, ensuring fully automated, high-precision, and stable welding performance.`
  },
];

const ACCESSORIES = [
  {
    id: "swinger-tracking", page: 21,
    cn: `摆动器 跟踪控制`, en: `Swinger & Tracking Control`,
    description: `摆动器：是一种通过驱动焊枪进行横向周期性摆动的装置。显著降低对坡口加工精度和装配一致性的要求，增强工艺适应性；通过精确调节摆动参数（如摆宽、频率、停留时间），可优化热输入分布，改善焊缝形貌，形成宽而平整的焊道，避免窄而凸起的不良成型；特别适用于多层多道焊中的盖面焊，能够有效提升表面焊缝的外观质量和均匀性。\n\n氩弧焊跟踪：是一种专用于自动化氩弧焊接系统的传感与控制技术。其核心目的是在焊接过程中通过监测焊接电流和电压的变化来推断焊枪与工件之间的距离（弧长）。当焊枪高度变化时，电参数会发生相应改变，系统据此进行高度方向的跟踪，更适用于MIG/MAG焊。`,
    descriptionEn: `Weaving Unit: A device that drives the welding torch to perform periodic lateral oscillation. It significantly reduces the requirements for groove machining precision and assembly consistency, thereby enhancing process adaptability. By precisely adjusting oscillation parameters (such as amplitude, frequency, and dwell time), it optimizes heat input distribution, improves weld morphology, and forms wide, flat weld beads.\n\nTIG Arc Tracking: A sensing and control technology specifically designed for automated TIG welding systems. Its core purpose is to infer the distance between the welding torch and the workpiece (arc length) by monitoring changes in welding current and voltage during the welding process. This method is more suitable for MIG/MAG welding.`
  },
  {
    id: "servo-drive", page: 22,
    cn: `伺服驱动 伺服电机`, en: `Servo driven & Servo motor`,
    description: `R系列新一代伺服采用全新的高性能主控芯片，提升通讯交互能力，拥有更新的高低频抑振，抗干扰能力强；伺服电机编码器采用高速通讯协议，具有更高分辨率，带来更高的位置反馈精度；操作面板可直接调试和修改驱动器参数，易上手好调试。`,
    descriptionEn: `The new generation of R series servo adopts a brand new high-performance main control chip, which enhances communication and interaction capabilities, and has high and low frequency vibration suppression and strong anti-interference ability. The servo motor encoder adopts high-speed communication protocol, which has higher resolution and brings higher position feedback accuracy. The operation panel allows for direct debugging and modification of driver parameters.`
  },
  {
    id: "stepper-drive", page: 23,
    cn: `步进驱动 步进电机`, en: `Stepper driven & Stepper motor`,
    description: `B系列步进驱动器，基于32位DSP硬件平台，利用微细分技术和PID电流控制算法设计，具有全方位超越普通模拟式步进驱动器的性能表现，拥有抗共振，低速力矩平滑，低噪音，持久耐用等优点。`,
    descriptionEn: `The B-series stepper driver is based on a 32-bit DSP hardware platform and designed using micro segmentation technology and PID current control algorithm. It has performance that surpasses ordinary analog stepper drivers in all aspects, with advantages such as resonance resistance, low-speed torque smoothness, low noise, and durability.`
  },
  {
    id: "signal-isolation", page: 24,
    cn: `信号隔离 继电器模组`, en: `Signal isolation & Relay module`,
    description: `X系列信号隔离器的供电电压为DC24V，内部采用高效的磁电隔离技术，输入输出电源之间相互隔离，具有高精度，高线性度，抗干扰等特点，主要用于解决信号传输过程中的干扰和安全问题。\n\nJ系列继电器采用原装正品欧姆龙继电器，插拔式底座，公共端双向指示灯，导轨安装，具有安全耐用，安装维修方便等优点，规格多样：2位，4位，6位，8位，10位，12位，16位。`,
    descriptionEn: `The X series signal isolator's power supply voltage is DC24V, it adopts efficient magnetoelectric isolation technology internally. The input and output power supplies are isolated from each other, with high precision, high linearity, anti-interference and other characteristics.\n\nThe J series relay adopts original genuine Omron relays, with a plug-in base, bidirectional indicator lights on the common end, and rail installation. Specifications: 2-position, 4-position, 6-position, 8-position, 10 position, 12 position, and 16 position.`
  },
  {
    id: "remote-control", page: 25,
    cn: `遥控器 无线手脉`, en: `Remote control & Wireless hand pulse`,
    description: `Y系列无线遥控器，无线手脉搭配自主研发控制器，根据客户需求定制每个按键的控制功能和文字，采用高性能无线芯片，抗干扰性强，稳定耐用，工作电压DC24V，可直接与控制系统，显示屏通讯，插拔式接线端子，让接线操作，后期维护更方便。`,
    descriptionEn: `Model Y Series Wireless Remote Controller and Wireless Handwheel, paired with our independently developed control system, allow customized control functions and labeling for each key based on client requirements. Equipped with high-performance wireless chips, the system offers strong anti-interference capability, stability, and durability. Operating at DC24V, it can communicate directly with control systems and display screens. Plug-in terminal blocks simplify wiring operations.`
  },
  {
    id: "stepper-wire-feeder", page: 26,
    cn: `步进送丝机`, en: `Stepper wire feeder`,
    description: `S系列步进送丝机是一种用于焊接等工艺中精确控制焊丝输送的设备，主要由步进电机，减速器，送丝轮等组成；具有精度高，控制灵活，可靠性强等优点。主要应用于手工氩弧焊，自动氩弧焊，等离子焊，激光焊等焊接工艺，可提高焊接效率和质量，减少焊工劳动强度。`,
    descriptionEn: `The S series stepper wire feeder is a device used for precise control of wire feeding in welding and other processes. It mainly consists of a stepper motor, reducer, wire feeding wheel, etc. It has the advantages of high precision, flexible control, and strong reliability. Mainly used in manual argon arc welding, automatic argon arc welding, plasma welding, laser welding and other welding processes.`
  },
  {
    id: "sliding-table", page: 27,
    cn: `模组滑台 手动微调`, en: `Module sliding table & Manual fine-tuning`,
    description: `H系列直线导轨滑台由航空铝型材，精密十字滚珠丝杆，膜片联轴器，单面防尘板，57步进电机组成，滚珠与导轨的接触点面分布，可分散载荷，提高承载能力；有效行程80mm（根据需要可定制），可水平十字，龙门式，三轴式多种叠法组合，具有高精度，低噪音，持久耐用等优点。广泛应用于机床，自动化生产线，机器人制造等领域。\n\n手动微调移动体是指在不依赖自动化计算或外部控制信号的情况下，通过人工操作对焊枪，夹具或者模型进行精细调整。`,
    descriptionEn: `The H series linear guide slide table is composed of aviation aluminum profiles, precision cross ball screws, diaphragm couplings, single-sided dust-proof plates, and 57 stepper motors. The effective travel is 80mm (customizable), and it can be combined with various stacking methods. Widely used in machine tools, automated production lines, robot manufacturing, and other fields.\n\nManual fine-tuning mobile body refers to the fine adjustment of welding guns, fixtures or models through manual operation without relying on automated calculation methods or external control signals.`
  },
  {
    id: "rotary-table", page: 28,
    cn: `中空旋转平台`, en: `Central control rotary table`,
    description: `Z系列中空旋转平台是一种新型的减速器，可以根据不同的减速比获得不同的输出转换，可以搭配伺服电机或步进电机进行任意角度分割，既能满足分割器无法实现的数字控制，又能精确定位。具有高刚性，高旋转精度，大力矩，低侧隙等优点。`,
    descriptionEn: `The Z series hollow rotating platform is a new type of reducer that can obtain different output conversions according to different reduction ratios. It can be paired with servo motors or stepper motors for arbitrary angle segmentation, which can meet the digital control that cannot be achieved by the splitter and accurately determine the position. It has the advantages of high rigidity, high rotational accuracy, large torque, and low backlash.`
  },
  {
    id: "planetary-reducer", page: 29,
    cn: `行星减速机`, en: `Planetary Reducer`,
    description: `行星减速机主要由太阳轮，行星轮，行星架和内齿圈组成，由于行星轮同时与太阳轮和内齿圈啮合，形成行星运动，从而实现减速和扭矩放大功能。具有结构紧凑，承载能力强，传动效率高，传动比大，运动平稳等特点，是工业传动系统中的重要组成部分。`,
    descriptionEn: `The planetary gearbox is mainly composed of a sun gear, planet gears, planet carrier, and inner ring gear. Due to the simultaneous meshing of the planet gears with the sun gear and inner ring gear, planetary motion is formed, thereby achieving deceleration and torque amplification functions. It has the characteristics of compact structure, strong load-bearing capacity, high transmission efficiency, large transmission ratio, and smooth motion.`
  },
  {
    id: "rotating-mechanism", page: 30,
    cn: `旋转机构 三维送丝机构`, en: `Rotating mechanism & 3D wire feeding mechanism`,
    description: `焊枪旋转体：最大化灵活性实现"万向"焊接的关键。无论工件如何摆放，或焊缝走向如何，180、360度旋转体都能找到最佳的焊枪朝向，降低了工装夹具的定位精度要求。\n\n三维送丝调节器通过三轴调节机构，可实现焊丝在空间中的三维角度调整，确保焊丝以最佳角度送入熔池，有助于提高焊缝成型质量，减少气孔，尤其在复杂焊缝或自动化焊接中作用显著。`,
    descriptionEn: `Welding Torch Rotator: The Key to Achieving "Omnidirectional" Welding with Maximum Flexibility. Regardless of workpiece placement or weld seam orientation, both 180° and 360° rotators can optimize torch alignment, reducing positioning accuracy requirements for tooling fixtures.\n\nThe three-dimensional wire feeding regulator can achieve three-dimensional angle adjustment of the welding wire in space through a three-axis adjustment mechanism, ensuring that the welding wire is fed into the molten pool at the optimal angle.`
  },
  {
    id: "distribution-cabinet", page: 31,
    cn: `配电柜制作`, en: `Manufacturing of distribution cabinet`,
    description: `一站式服务，全程无忧。从技术咨询、方案设计、生产组装到出厂测试、现场安装与技术支持，我们提供全流程服务，确保您省心、放心。`,
    descriptionEn: `One-stop service, worry-free throughout the process. From technical consultation, solution design, and production assembly to factory testing, on-site installation, and technical support, we provide end-to-end services to ensure your peace of mind and confidence.`
  },
];

const CONTACT = {
  address: "无锡市惠山区洛社西站商贸城4-1108号",
  addressEn: "Room 4-1108, Luoshe West Station Trade City (Commerce City), Huishan District, Wuxi City",
  phones: ["18915328994", "17768510394", "15251526168"],
  whatsapp: "+8618115791849",
  wechat: "+18094295169"
};

const STATS = [
  { number: "2014", label: "公司成立", labelEn: "Founded" },
  { number: "18+", label: "产品系列", labelEn: "Product Series" },
  { number: "30+", label: "配套产品", labelEn: "Supporting Products" },
  { number: "24h", label: "客服支持", labelEn: "Customer Support" }
 ];

function getData() {
  return {
    company: COMPANY,
    about: ABOUT,
    products: PRODUCTS,
    accessories: ACCESSORIES,
    contact: CONTACT,
    stats: STATS
  };
}
