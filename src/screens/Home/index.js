import React, {useState, useEffect} from 'react'
import api from '../../services/api'

import {
Container
} from './styles'

export default function HomeScreen() {
  const [categoryList, setCategoryList] = useState([
      {
        "premium": true,
        "_id": "5e879403c53b942ee4f1d698",
        "avatar": "https://pps.whatsapp.net/v/t61.24694-24/74489098_112819440294324_7641886848849995746_n.jpg?oe=5E90CE84&oh=98672f3987899156480d04e9affed2b5",
        "name": "AMIZADES 24HRS 😉"
      },
      {
        "premium": false,
        "_id": "5e652c6ce637b90017a48497",
        "name": "{[(ELITE AMIZADES)]}",
        "avatar": "https://pps.whatsapp.net/v/t61.24694-24/75643380_186178486000176_5400653583835969738_n.jpg?oe=5E8F4E50&oh=b1044e175b720408236e378e3a8bad05"
      },
      {
        "premium": false,
        "_id": "5e64f67fc56e7c0017bd84a6",
        "name": "Fazer Amizades 💢",
        "avatar": "https://pps.whatsapp.net/v/t61.24694-24/73545701_236283394074737_3759884194087995471_n.jpg?oe=5E8F4C02&oh=d650a1fa0e92e2e3b17da3ed2224778d"
      },
      {
        "premium": false,
        "_id": "5e652471ba6e28c6fc945e34",
        "name": "Novas Amizades",
        "avatar": "https://pps.whatsapp.net/v/t61.24694-24/75552746_225575411903391_2374508605136947096_n.jpg?oe=5E8F4E62&oh=c1752bc91f7baa0f32a7c4a8ca856ae6"
      },
      {
        "premium": false,
        "_id": "5e65425e23eb6a00171d4258",
        "name": "ヅαмιzα∂єѕ иα ѕιитσиια ρєяfєιтα۵🤍",
        "avatar": "https://pps.whatsapp.net/v/t61.24694-24/71173021_251072526291241_8507691851646392468_n.jpg?oe=5E90DD60&oh=7e45d265acfe4764dd1dad9c8a8de519"
      },
      {
        "premium": false,
        "_id": "5e85fd6a3a6f1500175696ff",
        "name": "🔥Adoradores de lolis🔥🔞😎😈",
        "avatar": "https://pps.whatsapp.net/v/t61.24694-24/75304785_227795918626791_7364615241935374888_n.jpg?oe=5E8F37DA&oh=086702c20ad94e55048f5fa0427acfdd"
      },
      {
        "premium": false,
        "_id": "5e85fd883a6f150017569700",
        "name": "Amigos e Risos",
        "avatar": "https://pps.whatsapp.net/v/t61.24694-24/57045472_438614446947933_1484941778170675200_n.jpg?oe=5E8F37FA&oh=5f675f0dc8c6b8cfdb5c5892f958bc89"
      },
      {
        "premium": false,
        "_id": "5e85fe0f3a6f150017569705",
        "name": "BBB 20 BABU campeão",
        "avatar": "https://pps.whatsapp.net/v/t61.24694-24/86758230_217183732714887_1146763098073518417_n.jpg?oe=5E8F3885&oh=d4fad26faa522f3b84a86269ef660c52"
      },
      {
        "premium": false,
        "_id": "5e85fdd73a6f150017569703",
        "name": "🍃🌸°•United By Destiny•°🌸",
        "avatar": "https://pps.whatsapp.net/v/t61.24694-24/75566958_637475990403897_6823426512496607405_n.jpg?oe=5E8F384B&oh=f8149281d69ff424e6f9ea00e2728a7f"
      },
      {
        "premium": false,
        "_id": "5e8781ba0d712115ace1662f",
        "avatar": "https://pps.whatsapp.net/v/t61.24694-24/75510203_106535444226294_7677125700347348068_n.jpg?oe=5E90BC3B&oh=97fb601f6d93b24d90659dd94cf6e177",
        "name": "Atura ou surta"
      },
      {
        "premium": false,
        "_id": "5e85fda63a6f150017569701",
        "name": "ᗅℳⅈℤᗅⅅℰՏ ᏉⅈℛͲႮᗅⅈՏ 24 ℍℛՏ💕",
        "avatar": "https://pps.whatsapp.net/v/t61.24694-24/75298231_2490501247869611_3884171825497214444_n.jpg?oe=5E8F3816&oh=0d54dfbb5285eef8d35779a04c0b3ed1"
      },
      {
        "premium": false,
        "_id": "5e85fdbd3a6f150017569702",
        "name": "🌕°𝕭𝖑𝖔𝖔𝖉 𝕸𝖔𝖔𝖓°🌕",
        "avatar": "https://pps.whatsapp.net/v/t61.24694-24/86175696_884577538652714_8405769653650311523_n.jpg?oe=5E8F3832&oh=96b014074e4d0fb2365820ae251a79b5"
      },
      {
        "premium": false,
        "_id": "5e85fdf73a6f150017569704",
        "name": "Visualizações de Status🤝🏻✅",
        "avatar": "https://pps.whatsapp.net/v/t61.24694-24/75528280_528430031154042_5854780439959423285_n.jpg?oe=5E8F3864&oh=d69698c6df14242a3b09dd55a0d6a5a7"
      },
      {
        "premium": false,
        "_id": "5e877e4c0d712115ace16618",
        "avatar": "https://pps.whatsapp.net/v/t61.24694-24/73579084_657721784798964_6316603367888384541_n.jpg?oe=5E90B8CD&oh=90fcef79cfc9a68d2e938604b18dab53",
        "name": "🔞🔥ℙ𝕀ℝ𝔸𝕄𝕀𝔻𝔼 ℙ𝔼ℝ𝔻𝕀𝔻𝔸 🔥🔞"
      },
      {
        "premium": false,
        "_id": "5e878a810d712115ace16633",
        "avatar": "https://pps.whatsapp.net/v/t61.24694-24/85536605_129730975146920_6417635402332528757_n.jpg?oe=5E90C502&oh=020441ea4585d3fc06c22b9a757a8c5e",
        "name": "₫єяяøTA qџASє ςєяTA 🥴🔥"
      },
      {
        "premium": false,
        "_id": "5e878ae20d712115ace16634",
        "avatar": "https://pps.whatsapp.net/v/t61.24694-24/85539146_632938697488220_8208842996071297837_n.jpg?oe=5E90C562&oh=2f288031cad852e067791b9004b68aa7",
        "name": "Grupo de zoar pessoas v2"
      },
      {
        "premium": false,
        "_id": "5e8790b40d712115ace16641",
        "avatar": "https://pps.whatsapp.net/v/t61.24694-24/86796157_225602202183533_639999913288883682_n.jpg?oe=5E90CB34&oh=7770121e4c5416d331f4ca7db1560fc5",
        "name": "ＨＡＫＵＮＡ  ＭＡＴＡＴＡ"
      },
      {
        "premium": false,
        "_id": "5e87914d0d712115ace16642",
        "avatar": "https://pps.whatsapp.net/v/t61.24694-24/74934652_234768477702391_3251244766360338038_n.jpg?oe=5E90CBCE&oh=52d63f860d4d5f16fa7eb336cb50b8e1",
        "name": "TRETAS FOGO NO PARQUINHO🥴"
      },
      {
        "premium": false,
        "_id": "5e8791bd0d712115ace16643",
        "avatar": "https://pps.whatsapp.net/v/t61.24694-24/86763989_516084859103555_3915774076748480291_n.jpg?oe=5E90CC3E&oh=9178610c599c21e255ffa170eef95f77",
        "name": "👑𝕱𝖗𝖎𝖊𝖓𝖉𝖘🔥"
      }
    
    ]);

const renderItems = categoryList.map((item) => <span>{item.name}</span>)

  return (
    <Container>
      {
       renderItems
      }
    </Container>
  )
}