---
layout: post
title: "认知神经科学导引"
subtitle: "Fundamentals of Cognitive Neuroscience"
author: "Tori"
header-style: text
comments: true
tags:
- Neuroscience
- Cognitive science
---

- TOC
{:toc}

## Chapter 1: 概论与研究方法

- 关于脑功能的学说
  - 定位论localization：不同的脑区有各自不同的功能，局部的脑损伤引起特定的行为缺陷（如Gall的颅相学、Wernicke和Broca的病例研究）
  - 等位论equipotentiality：大脑作为一个整体参与行为，局部的脑损伤可由其他脑区代偿（如Flourens的聚集场理论、Lashley的整体活动原理）
  - 两者的统一：简单的认知功能可由定位论解释，复杂的认知功能需要不同脑区配合完成
- 认知神经科学的传统研究方法
  - 神经解剖学neuroanatomy：脑切片、尸体解剖、细胞染色、束路追踪等
  - 神经生理学neurophysiology
    - 单细胞记录
      - 胞内记录会损伤细胞，胞外记录需鉴别其他细胞的影响
      - 以自发放电水平为基线进行比较，神经元的整体活动不等于单个细胞活动的简单加和，需要考虑不同神经元发放模式之间的关联
    - 脑损伤法
      - 不可逆损伤法：抽吸脑组织、横断损伤、电解损伤、神经化学损伤等
      - 可逆损伤法：低温和药物，每个被试都可以做自身的对照组
      - 缺点：可能不仅仅损伤了受损脑区的功能，还可能出现代偿
    - 基因控制：基因敲除、光遗传法（植入特定基因使目标细胞对光具有反应性，起到基因开关的作用）
  - 神经病学neurology
    - 局部性病变：脑血管病（如中风）、脑肿瘤等
    - 弥散性病变：退行性疾病（Alzheimer、Parkinson、Huntington、Pick额颞痴呆）、感染性或毒性疾病（Korsakoff综合征、单纯疱疹性脑炎）、创伤、癫痫
    - 功能性神经外科手术：裂脑、深部脑刺激（把电极植入基底神经节以治疗PD）、干细胞
  - 认知心理学方法、计算机建模方法等
- __认知神经科学中的脑成像方法__
  - 电信号方法：EEG、ERP
    - 原理：记录大量神经元放电产生的电位差，在记录ERP时应多次给予刺激并对脑电取平均以去除噪音
    - 参数：时间分辨率高，空间分辨率低，对脑内结构几乎无法定位
    - 应用：癫痫监测、睡眠研究等
  - 化学信号方法：PET、fMRI
    - 基本原理：通过检测细胞代谢信号的变化来推测神经元活动的变化
    - PET原理：检测同位素在血流中的分布（常用氧15），具体原理为细胞活动越强，血流量越大，同位素发射正电子越多，湮灭产生光子越多，探测器反应越强
    - fMRI原理：生物学基础为BOLD（Blood Oxygenation Level Dependent，血氧水平依赖性），具体原理为细胞活动越强，顺磁性的脱氧血红蛋白含量越高，局部磁场的变化导致磁共振信号的变化
    - 参数：空间分辨率高，时间分辨率低（受代谢过程限制）
    - PET有安全性问题，同位素半衰期较长，且只能做组块设计（需要花时间收集足够多的光子来成像）
    - fMRI设备便宜，可以对同一被试进行反复测试，可以进行事件相关设计（减少疲劳效应、预期效应、练习效应，适用于不能提前预知性质的认知过程，但检测效力下降）
    - 应用：肿瘤诊断、药物作用研究等
    - NIRS原理：近红外区域的红光和绿光对氧合/脱氧血红蛋白的敏感性不同
  - 磁信号：MEG
    - 原理：检测大脑电活动产生的磁信号变化
    - 参数：时间分辨率与ERP相同，空间分辨率高于ERP
    - 优缺点：只能检测与颅骨表面平行的电流方向（既是局限也可减少其他脑区影响），设备昂贵，信号在源定位上更有优势（磁信号经过颅骨不失真）
  - 虚拟损伤：TMS
    - 原理：线圈放电产生磁场变化引起生理电流，进而引起神经元放电
    - 优点：暂时性的虚拟损伤，可应用于人类被试，安全性好，可以重复刺激
    - 缺点：只能作用于大脑表层的皮质区域，空间分辨率低，刺激对象会产生一定不适感
- __单分离与双分离__
  - 单分离：两组被试在两项任务上进行测试，两者只在一项任务上存在明显差异
  - 双分离：两组被试在两项任务上进行测试，两者分别在两个任务上表现出受损
  - 单分离的结果可能由任务的难度或敏感性不同等导致，因而双分离的解释力更强
  - 例子：额叶/颞叶受损与recency/familiarity记忆

## Chapter 2: 视知觉

### 视觉感知及其表征

- 视觉系统的功能组织
  - 视觉通路：视网膜→外侧膝状体（10%传到丘脑枕和上丘等皮质下结构）→视放射→枕叶初级视皮层
  - 视网膜：感受器包括视杆（光线&外周）和视锥（颜色&中央凹），神经节细胞是唯一传出
  - 外侧膝状体LGN：腹侧两层大细胞层M系统、背侧四层小细胞层P系统，LGN负责对侧视野（235层接收同侧视网膜颞侧，146层接收对侧视网膜鼻侧）
  - 视皮层：共六层细胞，来自LGN的通路分M、P-blob和P-interblob，位于V1的blob区较黑且代谢率高

  | LGN到视皮层     | V1                 | V2            | 敏感视觉特征 |
  | --------------- | ------------------ | ------------- | ------------ |
  | M通路           | 4Cα→4B             | thick stripes | 运动         |
  | P-blob通路      | 4Cβ→2&3的blob      | thin stripes  | 颜色         |
  | P-interblob通路 | 4Cβ→2&3的interblob | interstripes  | 位置/方向    |

  - 功能柱：具有相同感受野的视皮层神经元，在垂直于皮层表面的方向上呈柱状分布，只对某一种视觉特征发生反应，包括方位柱、颜色柱、眼优势柱、空间频率柱等

- 视觉特征的表征：不同特征独立加工
  - 生理学证据：单细胞记录MT区细胞，对颜色几乎无反应，对运动和方向非常敏感
  - 认知心理学证据：视觉搜索与特征整合理论、视错觉（运动错觉引起V5激活，颜色错觉引起V4激活）
  - 脑成像证据：PET实验中，颜色刺激引起V4而无MT，运动刺激引起MT而无V4
  - 病人证据：二色觉/异常三色觉（视锥细胞受损或异常）、全色盲/半色盲（V4受损，对形状知觉也有影响）、运动盲（V5/MT损伤，无法知觉运动物体的方向和速度）等
- 视觉的皮质下通路：视网膜-上丘通路对眼动起重要作用、盲视（不知是皮质下还是残留皮质）
- 多通道知觉：McGurk效应、联觉（不同通道感觉间的特殊联合，原因不明）
- 视觉的腹背通路
  - what通路：腹侧，枕叶到颞叶，物体知觉
  - where通路：背侧，枕叶到顶叶，空间知觉
  - 腹背通路的双分离证据
    - 顶叶受损的猴子在landmark task中表现差，颞叶受损的猴子在object discrimination task中表现差
    - 一侧腹侧通路受损，因两侧颞叶借由胼胝体有信息交流，物体知觉仍较正常；一侧背侧通路受损，因顶叶信息单侧传递，空间知觉明显受损
    - 生理学证据：颞叶神经元对物体有选择性且感受野包括中央凹，顶叶神经元则反之
    - 病人证据：视觉失认症（让其将卡片插入凹槽，不能外显匹配但能完成动作）、视觉性共济失调（能报告凹槽方向，但无法完成动作）
    - 脑成像证据：物体任务与位置任务的脑区双分离

### 物体识别与面孔识别

- 物体识别理论
  - 与视角的关系：左侧梭状回view-invariant，右侧梭状回view-dependent（利用fMRI和重复抑制效应）
  - Biederman的成分识别理论：一个物体由一些特定的几何子及它们的空间关系所决定
  - 层级编码理论：从初级特征到高级特征最后到能够识别复杂物体的神经元
    - 支持证据：对面孔的选择性反应（祖母细胞）
    - 局限性：单个细胞不够鲁棒，无法处理新物体，物体可能随时间改变等
  - 集群编码理论：复杂物体由同时激活的一群细胞共同编码和定义
    - 优点：可以解释为什么人们会混淆相似的物体、可以处理新物体的出现
- __物体识别缺陷：视觉失认症visual agnosia__
  - 区分视觉失认和记忆障碍：以其他通道（如听觉和触觉）呈现同一刺激
  - 统觉性失认症apperceptive agnosia：只能知觉到物体的个别属性
    - 腹侧通路病变，可以区分颜色差别，但不能区分形状，不能读出字母，不能描摹图形
    - 测验方法1：Gollin incomplete figures/letters task，对一系列越来越完整的图形进行逐一识别
    - 测验方法2：unusual view objects test / shadow test，检查病人的物体恒常性
  - 联想性失认症associative agnosia：能感知到物体的各种属性，但不明物体的名称用途和意义
    - 知觉能力正常，障碍发生在知觉和记忆的联合阶段，可以描述和描摹，不能命名或分类
    - 测验方法：matching-to-function test，从两张图中选出功能与给定图匹配的一项
  - 整合性失认症integrative agnosia：不能将物体的各个部分连成一个整体
    - 无法一眼认出物体，必须依赖对各个部分或主要特征进行识别，难以识别重叠图形
    - 测验方法：测量在特征搜索/联合搜索任务上的表现差异，病人在两个任务上的表现无差异
- 面孔识别
  - 颞上沟STS：面孔选择性强，负责面孔的可变特征，如眼动和情绪
  - 梭状回面孔区FFA：面孔选择性弱，负责面孔的不变特征，如五官和身份
  - N170：于梭状回附近头皮可检测到，面孔选择性弱，对大猩猩面孔或面孔示意图也会有反应
  - 面孔选择性的争议
    - 专家效应？对汽车专家和鸟专家的研究
    - 反驳证据：面孔失认症的牧羊人不认熟人但能认自己的羊、面孔加工与物体加工的分离
  - 面孔加工与物体加工的分离证据
    - 面孔的倒置效应、两个病人对面孔/眼镜再认表现的双分离、整体性加工与分析性加工（判断part/whole是否属于刚才看到的面孔或房子，面孔part条件成绩明显较差）
- 物体识别的双系统模型：面孔识别依赖整体分析，单词识别依赖部分分析，物体识别介于两者之间

## Chapter 3: 运动控制

### 运动控制及其表征

- 运动系统的功能组织
  - 肌肉、运动神经元（α）、脊髓
  - 皮层下结构：小脑、基底神经节
  - 皮层区域：初级运动皮层M1（发出皮质脊髓束，即锥体束）、运动前区PMC、辅助运动区SMA
  - 锥体外系：红核/顶盖/网状/前庭-脊髓束
  - 组织形式：躯体特定区域的表征（倒立，区域大小与动作精细程度有关）、对侧控制、层级性组织（脊髓→脑干→小脑和基底神经节→大脑皮层）
  - 中枢模式产生器central pattern generators：脊髓中的一些特定神经元，在没有任何外部反馈的情况下也可以产生完整的动作序列，体现运动组织的层级性
- 运动的神经编码与表征
  - 运动计划的内容：基于距离或基于位置（对无感觉输入的猴子手臂施加反作用力后仍可到达目标位置）
  - 场向量population vector：每个细胞有其最优方向，细胞的反应活动大小是目标方向与最优方向的差的函数，所有细胞活动的向量总和称为场向量，可用于预测真实运动方向（脑机接口）
    - M1神经元的场向量可编码运动方向，也可编码肌肉运动模式，但在PMC中几乎全都编码方向
  - 基于位置/目标的神经元依赖环境信息，分布于顶叶皮质（对顶叶TMS导致末端运动调整困难）、额叶皮质运动区、皮质下结构（猴子基底神经节神经元活动与手臂的空间位置有关）等
- 镜像神经元：匹配动作观察与执行的神经元系统，在动作理解和模仿中起重要作用，涉及下顶叶和前额叶
  - 生理学证据：单细胞记录，猴子能理解用手拿，但不能理解用工具拿
  - 脑成像证据：人看人/猴/狗吃东西脑区都有激活，换成看唇语只有看人时激活
  - 动作的理解不依赖于感觉通道，镜像神经元能理解抽象动作（如抓一个被挡住的物体）
- 运动控制的信息指导
  - 外部环路：以PMC为中心，配以顶叶和小脑，到M1
  - 内部环路：以SMA为中心，配以前额叶和基底神经节，到M1
  - 实验双分离证据：让猴子根据外部线索（灯亮的顺序）或者内部线索（记忆）进行按键

### 运动障碍及功能分析

- 运动障碍
  - 偏瘫hemiplegia：无法自主控制对侧身体运动，锥体束受损，常由中风引起，出现反射亢进和肌肉强直
  - 失用症apraxia：肌肉控制能力正常，但表现出运动技能缺陷，通常是左侧顶叶受损
    - 测验方法：pantomiming test，要求用手比划某个工具的使用方法
    - 观念性失用症ideational apraxia：不能正确完成动作序列，也不能利用给定工具完成日常任务
    - 意向运动性失用症ideomotor apraxia：可以说出动作序列，但不能外显地做出相应动作
  - SMA受损障碍：两侧的SMA为互相抑制的关系
    - 异手综合征alien hand syndrome：内部运动计划受损，导致对侧手追随外部线索
    - 镜像运动mirror movement：要求用受损SMA对侧的手抓东西，因对侧SMA不受抑制导致双手去抓
    - 双手协调障碍：无法一只手开抽屉一只手拿抽屉里的笔
- 运动的皮层下结构：小脑
  - 古小脑/前庭小脑：控制身体平衡和眼动，从前庭来，到前庭网状和脊髓去
  - 旧小脑/脊髓小脑：控制肌张力，从脊髓小脑前/后束来，到红核网状和脊髓去
  - 新小脑/大脑小脑：控制随意运动，从脑桥来，到丘脑和皮质去
  - 小脑如何协调运动？时间安排假说：小脑提供效应器活动时间的精确安排
- 运动的皮层下结构：基底神经节
  - 新纹状体（尾状核和壳）、苍白球GP、黑质SN、底丘脑核STN
    - 苍白球分内侧板 GPi 和外侧板 GPe、黑质分网状部 SNr 和致密部 SNc
  - __基底神经节的神经通路__
    - 直接通路：SNc ➾(D1) 纹状体 ➔ SNr/GPi ➔ 丘脑，对皮层起兴奋性作用
    - 间接通路：SNc ➔(D2) 纹状体 ➔ GPe ➔ STN ➾ SNr/GPi ➔ 丘脑，对皮层起抑制性作用
    - 皮层 ➾ 纹状体和STN → 通路 → 丘脑 ➾(Ach) 皮层
    - 未标记的兴奋性神经递质均为谷氨酸，抑制性神经递质均为GABA，SNc到纹状体为多巴胺
  - 基底神经节受损的运动障碍
    - 帕金森病：阳性症状如静止性震颤、肌肉强直，阴性症状如自主运动减少、运动迟缓
      - 黑质到纹状体的多巴胺通路受损，直接通路减弱间接通路增强，导致皮质兴奋性减弱
      - 治疗方法：口服左旋多巴、用电极刺激STN等
    - 亨廷顿病：非自主的运动（即舞蹈症），伴有其他认知功能障碍
      - 纹状体萎缩，导致间接通路中到GPe的通路减弱，从而皮质的兴奋性增强
  - 功能假设：在运动计划/认知目标的转换中起作用

## Chapter 4: 学习与记忆

- 记忆的相关理论
  - 三个阶段：编码、存储、提取
  - 分类：感觉记忆、短时记忆（语音为基础）、长时记忆（语义为基础）
  - 长时记忆的分类：外显记忆（情节记忆和语义记忆）、内隐记忆

### 工作记忆

- 工作记忆模型（Baddeley）：中央执行系统（最高控制）、视觉空间画板（形成视觉语义知识）、语音环路（形成语言知识）、情节缓冲区（负责将各方信息与情节整合，形成情节记忆）
- 工作记忆范式：延迟反应任务、延迟样本匹配任务、N-back任务（当前刺激与前面第N个一样时做反应）
- 工作记忆相关脑区：前额叶（执行功能、情节缓冲）、顶叶（语音环路）、颞叶下部（视觉空间画板）
  - 前额叶PFC分为外侧、内侧、前部、眶额叶（及前扣带回ACC）
  - DLPFC/VLPFC的功能分离假设：基于内容（spatial/object）或基于过程（manipulation/maintenance）
    - 实验一：spatial task和object task，发现腹背无差异，但呈现左右半球差异（左object右spatial）
    - 实验二：顺序读字符串和排序后读字符串，结果支持基于过程的假设，背侧负责manipulation
    - 实验三：空间/语词的前向/后向记忆任务，发现空间/语词双分离位于顶叶/前额叶，DLPFC活动在后向时更强，支持基于过程的假设
  - 前额叶的层级性：从后往前（简单任务/复杂任务），从腹到背（maintenance/manipulation），从外到内（记忆受外部线索/内部动机的影响）
  - 前额叶对后皮质区有调制作用（指示进行场景记忆/面孔记忆任务，FFA/PPA活动相应增强/减弱）

### 长时记忆：外显记忆

- 长时记忆相关脑区：内侧颞叶系统（海马和海马旁回）、间脑系统（乳头体、丘脑前核等）、基底前脑
- 内侧颞叶系统MTL
  - 海马：齿状回DG、海马下脚、CA1、CA3，传出纤维为穹窿，到间脑乳头体
  - 海马旁回：内嗅皮层EC、围嗅皮层PRC、海马旁皮层PHC
  - 信息传递：单通道/多通道联合区 → PRC and PHC → EC（和其他直接输入）→ 海马
  - 海马的突触结构：EC到齿状回的前穿质通路、齿状回到CA3的苔藓纤维、CA3到CA1的Schaffer通路、CA1到海马下脚、海马下脚到EC（EC到以上四个结构均有通路）
- 长时记忆障碍
  - 遗忘症amnesia：分顺行性遗忘和逆行性遗忘，通常为MTL或间脑受损，海马损伤足以造成严重记忆障碍
  - Korsakoff综合征：慢性酒精中毒引起维生素B1缺失，间脑背内侧核团和乳头体退化，导致记忆障碍
  - Alzheimer综合征：老年痴呆，MTL中出现标志性的淀粉样蛋白斑和神经纤维缠结
- 长时记忆的理论问题
  - 回忆性与熟悉性（recollection and familiarity）
    - 任务范式：回忆/再认、目标记忆/源记忆、新旧判断、R/K或R/K/N判断等
    - Recollection/Familiarity的分离：海马损伤导致recollection受损，围嗅皮层损伤导致familiarity受损
  - 长时记忆的巩固
    - 标准巩固理论standard consolidation theory：记忆巩固需要海马，但海马作用时间有限，记忆巩固完成后就不需要海马了（证据：90天内四次学习并测记忆成绩，VMPFC活动增强而海马活动减弱）
    - 多重痕迹理论multiple trace theory：语义记忆的巩固同上，但情节记忆一直受到海马的调节，且时间越长海马中的记忆痕迹越多（证据：对各种时间的情节记忆回想时都能检测到海马活动）
- 长时记忆的模型研究
  - 猴子模型：延迟不匹配任务（给A选A，再给AB要求选B）
    - 海马及海马旁受损导致学习时间变长，且延迟时间越长损伤区域越大学习效果越差
  - 大鼠模型：老鼠走迷宫任务
    - 认知地图理论：认知地图是海马的基本功能，大鼠在完成空间学习记忆任务时会使用认知地图
    - 2014年诺贝尔奖：海马中的place cell与grid cell
  - 人类模型：脑成像研究
    - Dm效应（Difference due to memory）：在连续记忆多个项目的过程中，被记住的和被遗忘的项目在编码阶段表现出不同的神经活动
    - 内侧颞叶和前额叶的活动能有效预测记忆效果，进一步地，海马活动可预测recollection水平，海马旁回活动可预测familiarity水平
    - 记忆编码时，左侧海马对词语激活更强，而右侧对词语面孔物体场景等均有激活
    - 记忆提取时，正确的回忆伴随更强的海马活动
- 额叶与长时记忆
  - 额叶受损不会导致严重记忆障碍，但会损伤记忆项目与环境的联系，如元记忆和源记忆
  - 半球编码的不对称性
    - 基于过程：HERA模型（hemispheric encoding/retrieval asymmetry），提出左侧PFC主要参与情节记忆的编码，右侧PFC主要参与情节记忆的提取
    - 基于内容：左侧记词，右侧记脸，两侧都记物体
  - 编码阶段，前额叶同样有Dm效应，且存在腹背功能分离
  - 提取阶段，前额叶活动与项目的回想难度有关，提取情节记忆比提取语义记忆活动更强

### 长时记忆：内隐记忆

- 启动效应priming effect：执行某一任务对后来执行相同或类似任务的促进作用
  - 分类：知觉启动、概念启动
  - 测验方法：词干补全、知觉辨认、自由联想、范畴举例等
- 遗忘症病人可以学到新的内隐记忆，称为程序性学习，包括运动技能、运动习惯、某些认知技能等
  - 证据：在乱序中隐藏重复的固定顺序，病人外显地认为是随机的，但内隐地他们对重复顺序的反应时减少
- 知觉表征系统perceptual representation system（Schacter）
  - 含义：对刺激形式和结构的加工与表征系统，与刺激的意义和相关信息无关
  - 特点：在前语义水平上加工信息、对先前经验的无意识表达、大脑皮质有相应活动
  - 知觉特异性效应：内隐记忆受知觉特征的影响，而不受加工水平和注意的影响，外显记忆则反之
- 启动效应的脑基础：枕叶和前额叶，与MTL无关
  - 枕叶与知觉启动相关：知觉启动对知觉特征敏感，尤其是在右侧梭状回处
    - 证据：右侧梭状回在启动刺激和探测刺激的大小写相同时才表现出启动效应
  - 前额叶与概念启动相关：额叶信号与对探测刺激反应时的相关性、TMS刺激PFC可减小启动效应
  - 重复抑制repetition suppression，即重复呈现刺激后神经活动减少
  - 重复抑制的可能原因：神经元活动水平下降/参与的神经元数目减少/神经元响应速度变快

## Chapter 5: 语言及概念表征

- 语言的相关理论
  - 心理词典：频率效应、邻近词效应、词汇网络模型（概念层、词元层、声音层）
  - 句法分析：花园路径模型（对句子有一个解释的偏好），最小挂靠原则、迟关闭原则
  - 词汇理解：模块化理论（语境在后）、相互作用理论（语境在前）
- 语言输入的基本加工
  - 听觉加工：颞上沟STS对语音敏感，且偏侧化于左半球，对单词敏感的还包括颞下/颞中回/角回/颞极等
  - 视觉加工：视觉词形区VWFA（Visual Word Form Area），位于左侧枕颞沟，对词形反应，与左右视野无关，右侧对应区域受单词的知觉特性影响
    - 纯失读症pure alexia：不能阅读单词，但能一个字母一个字母地读，可能由VWFA受损引起
  - 语义加工：STS/颞极/角回/缘上回/内侧前额叶/PCC等，语义错误或客观知识错误导致N400
  - 句法加工：Broca/颞上等，句法错误导致P600和LAN（left anterior negativity）
- 神经循环假说neural recycling hypothesis
  - 含义：人们不太可能在语言出现的这几千年里就进化出专门处理语言的脑区。可能是后天的学习经验塑造了这些脑区，而非基因上的修饰和改变
  - 实验：让一些文盲、前文盲、识字的人学习和阅读假词
  - 结果：文化程度越高，VWFA的激活越强，且VWFA对单词刺激特异化程度越高
  - 盲人摸盲文也有VWFA活动，但区域更靠前一些
- __语言障碍：失语症aphasia__
  - Lichtheim的语言模型：B为概念存储区，M为语言计划区（Broca区），A为语音词典区（Wernicke区）
    ![Language disorders](/img/in-post/fig-language-disorder.png)
  - Broca失语：左侧额下部Broca区受损（BA44-45），只能说简单的音节或词，句子缺乏语法标记，说话费劲，可能有一定的语言理解障碍
  - Wernicke失语：左侧颞上回后部Wernicke区受损，无法理解书面和口头语言，能流利地说句子，但说出的句子没有意义，可能有命名障碍
  - 传导性失语conduction aphasia：弓状束受损，自发说话会频繁出错，能意识到自己话中的错误但无法纠正，难以复述他人的话
  - 跨皮质感觉性失语transcortical sensory aphasia：角回缘上回受损，可以复述，可以纠正语法错误，但理解语言有困难
  - 跨皮质运动性失语transcortical motor aphasia：症状类似Broca失语，强迫性复述他人言语
  - 纯词聋pure word deafness：完全不能理解语言，但说话和读写能力正常
  - 构音障碍dysarthria：发声肌肉的病变，难以产生音素
  - 语义痴呆semantic dementia
    - 无法命名物体概念和人物，与输入通道无关，拷贝物体时会丢失区别性特征或加入其他特征，若仅轻度痴呆则可辨认典型情况下的物体（如绿色的菜），与额颞叶变性（FTLD）导致的颞极萎缩有关
    - 颞叶前部ATL的功能假说：（a）跨通道相互作用由位于ATL的枢纽进行完成和调节（其他可能的枢纽包括顶叶、AG、左侧pMTG等）；（b）ATL专门加工与人相关的信息
- 概念表征
  - 通道特异性假设、范畴特异性假设（有生命/无生命、知觉特征/功能特征）
  - 范畴特异性的相关脑区：梭状回（外侧对有生命，内侧对无生命），外侧颞叶、左侧PMC和左侧顶叶
  - 范畴特异性的证据：病人的双分离，听觉刺激同样存在差异，先天盲人也有类似的脑区激活
  - 围嗅皮层受损可导致有生命范畴的特异性损伤

## Chapter 6: 情绪

### 情绪加工及其机制

- 情绪的相关理论
  - 六种基本情绪：高兴/悲伤/愤怒/恐惧/厌恶/惊讶
  - 情绪的两个维度：心理效价valence、生理唤醒arousal
  - 情绪的测量方法：主观报告、皮肤电反应SCR（汗腺反应与唤醒程度几乎呈线性关系）
  - 情绪的基本模型：James-Lange（生理唤醒导致情绪体验）、Cannon-Bard（生理唤醒和情绪体验同时发生，无因果联系）
- 情绪的相关脑区
  - Papez环路：下丘脑乳头体-丘脑前核-扣带回-海马
  - 杏仁核、眶额叶、脑岛、前扣带回
  - 杏仁核的解剖结构
    - 基底外侧核：传入为主，来自前额叶、丘脑、海马等
    - 中央核团：传出为主，到下丘脑HPA轴等，产生自主神经系统反应
    - 传入通路：低通路（丘脑-杏仁核，快，无意识）、高通路（丘脑-皮层-杏仁核，慢，有意识）
    - 反馈通路：从杏仁核到所有初高级皮层
- 杏仁核的功能
  - 研究发展：对负性情绪反应→对所有情绪反应→提高警觉程度（对中性面孔仍有反应）
  - 功能：检测威胁，调节警觉水平
  - 杏仁核与意识
    - 实验方法：在有意识/无意识（通过掩蔽或者双眼竞争实现）条件下观看负性脸/中性脸
    - 左侧杏仁核和有意识加工有关，右侧杏仁核与无意识加工有关（还和丘脑枕核、上丘活动有正相关）
    - 有意识条件下，FFA和STS活动与杏仁核无相关，杏仁核的反馈通过腹背两条通路传回去
    - 无意识条件下，FFA仍无相关但STS与右侧杏仁核有正相关，杏仁核的反馈只通过背侧到达STS使之对不同情绪的脸表现出差异
  - 杏仁核与注意
    - 在注意瞬脱范式中将T2设为情绪刺激，则杏仁核正常的情况下T2的报告率增加，杏仁核损伤的情况下正常注意瞬脱
    - 对情绪目标的视觉搜索：搜索高兴目标的反应时随干扰项数目的增多而变长，搜索生气目标则无变化
    - 对非注意条件的恐惧面孔刺激，FFA激活明显减弱，但杏仁核激活正常
- 眶额叶皮层
  - 功能：表征社会知识，根据社会情境选择合适的行为
  - 眶额叶受损的表现：忽略环境而受知觉信息的支配，如模仿行为、使用行为（看到眼前的工具就用）、人格的改变、不关心当下或将来，获得性的反社会倾向等
- 脑岛与厌恶情绪有关，前扣带回与厌恶愤怒等有关

### 情绪和其他认知过程的关系

- 情绪与内隐记忆：恐惧条件反射fear conditioning
  - 病人S.M.：双侧杏仁核损伤，能知道CS和US的关系，但对CS没有SCR反应
  - 病人W.C.：海马损伤，不知道CS和US的关系，但对CS存在SCR反应
  - 结论：杏仁核和海马的功能分离，恐惧条件反射属于内隐记忆
  - 恐惧学习的外显途径：观察式恐惧学习observational fear、指导式恐惧学习instructed fear
- 情绪与外显记忆
  - 对情绪刺激的记忆
    - 实验：给被试讲故事，分neutral-emotional-neutral三个阶段，要求复述
    - 结果：正常被试emotional部分记得最好；杏仁核损伤的被试则表现出序列位置效应；注射β-肾上腺素抑制剂组的被试对emotional的记忆成绩介于两者之间
    - 情绪对记忆巩固的调节：杏仁核的基底外侧核，基于唤醒水平，在记忆巩固中起作用，作用是调节性的而非必须的，高唤醒水平可以促进激素和神经递质的释放
    - 编码阶段杏仁核、海马、内嗅皮层的活动可以预测对情绪刺激的记忆效果（emotional Dm effect），之后提取做R/K判断时，对情绪刺激报告remember的比例更高（实际回忆正确率差不多）
  - 情绪环境中对中性刺激的记忆
    - 实验1：电击/无电击+延迟+记忆目标，第二天测回忆成绩
    - 结果：电击促进对中性刺激的记忆，且增强效应与杏仁核、杏仁核-海马联系的活动均呈正相关
    - 实验2：条件反射前学习-恐惧条件反射学习-条件反射后学习，并在24h后/6h后/立刻测回忆成绩
    - 结果：情绪环境对之前的刺激记忆增强在6h后显著，对之后的刺激记忆增强在24h后显著
- 情绪与社会行为
  - 杏仁核损伤的病人在看面孔时更少地看眼睛，自闭症病人也表现出同样的行为
  - 杏仁核损伤的病人更容易相信其他人（对人越不信任，杏仁核活动越强）
  - 刻板印象与内隐联想测验（IAT）：比较（白人好黑人坏）与（白人坏黑人好）的反应时差异
  - 刺激短暂呈现时（内隐条件），杏仁核对自己种族和对另一种族的反应有较大差距，但当呈现时间变长时这个差距逐渐缩小，同时DLPFC、VLPFC，ACC活动增强，体现自上而下的认知控制过程
- 情绪与决策行为：眶额叶
  - 躯体标记假说somatic marker hypothesis：情绪指导决策行为
  - 躯体标记指情绪产生的生理反应，人们根据躯体标记的内在表征进行决策行为
  - 实验范式为Iowa gambling task：有两堆好牌堆和两堆坏牌堆，每张牌对应奖励或者惩罚，好牌堆的净收入为正而坏牌堆的净收入为负，参与者在不知道牌堆任何信息的情况下开始若干轮的抽牌
  - 预期性皮肤电反应anticipatory SCR：预期做出冒险行为时表现出的SCR，在行为之前出现，眶额叶损伤的病人无此SCR，在实验过程中也不减少选取坏牌堆的次数
