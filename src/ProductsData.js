import pera from './components/product/images/pereciveis/pera.png'
import maca from './components/product/images/pereciveis/maca.png'
import melancia from './components/product/images/pereciveis/melancia.png'
import melao from './components/product/images/pereciveis/melao.png'
import morango from './components/product/images/pereciveis/morango.png'
import banana from './components/product/images/pereciveis/banana.jpg'
import pao_de_forma_pullman from './components/product/images/pereciveis/pao_de_forma_pullman.jpg'
import pao_de_forma_panco from './components/product/images/pereciveis/pao_de_forma_panco.jpg'
import presunto_cozido_sadia from './components/product/images/pereciveis/presunto_cozido_sadia.png'
import queijo_minas_light_tirolez from './components/product/images/pereciveis/queijo_minas_light_tirolez.png'

import farinha_de_trigo_dona_benta from './components/product/images/nao_pereciveis/farinha_de_trigo_dona_benta.jpg'
import farinha_mandioca_yoki from './components/product/images/nao_pereciveis/farinha_mandioca_yoki.png'
import acucar_olho_dagua from './components/product/images/nao_pereciveis/acucar_olho_dagua.png'
import acucar_caravelas from './components/product/images/nao_pereciveis/acucar_caravelas.png'
import acucar_uniao from './components/product/images/nao_pereciveis/acucar_uniao.png'
import arroz_branco_camil from './components/product/images/nao_pereciveis/arroz_branco_camil.png'
import arroz_integral_camil from './components/product/images/nao_pereciveis/arroz_integral_camil.png'
import arroz_parboilizado_camil from './components/product/images/nao_pereciveis/arroz_parboilizado_camil.png'
import atum_solido_gomes_da_costa from './components/product/images/nao_pereciveis/atum_solido_gomes_da_costa.jpg'
import cafe_nescafe from './components/product/images/nao_pereciveis/cafe_nescafe.png'
import feijao_carioca_camil from './components/product/images/nao_pereciveis/feijao_carioca_camil.png'
import leite_em_po_ninho from './components/product/images/nao_pereciveis/leite_em_po_ninho.png'
import macarrao_pena_renata from './components/product/images/nao_pereciveis/macarrao_pena_renata.jpg'
import macarrao_instantaneo_nissin from './components/product/images/nao_pereciveis/macarrao_instantaneo_nissin.png'
import oleo_de_girassol_liza from './components/product/images/nao_pereciveis/oleo_de_girassol_liza.png'
import oleo_de_milho_liza from './components/product/images/nao_pereciveis/oleo_de_milho_liza.jpg'
import sardinha_coqueiro from './components/product/images/nao_pereciveis/sardinha_coqueiro.jpg'
import toddy_achocolatado from './components/product/images/nao_pereciveis/toddy_achocolatado.jpg'

import papel_higienico_neve from './components/product/images/higiene/papel_higienico_neve.png'
import papel_higienico_elite from './components/product/images/higiene/papel_higienico_elite.png'
import pasta_de_dente_sorriso from './components/product/images/higiene/pasta_de_dente_sorriso.png'
import pasta_de_dente_oralb from './components/product/images/higiene/pasta_de_dente_oralb.png'
import pasta_de_dente_colgate from './components/product/images/higiene/pasta_de_dente_colgate.png'
import sabonete_dove from './components/product/images/higiene/sabonete_dove.png'
import sabonete_johnson from './components/product/images/higiene/sabonete_johnson.png'
import sabonete_lux from './components/product/images/higiene/sabonete_lux.png'
import sabonete_nivea from './components/product/images/higiene/sabonete_nivea.png'
import shampoo_dove from './components/product/images/higiene/shampoo_dove.png'
import shampoo_johnson from './components/product/images/higiene/shampoo_johnson.png'

import agua_sanitaria_ype from './components/product/images/limpeza/agua_sanitaria_ype.jpg'
import ajax_fresh_lemon from './components/product/images/limpeza/ajax_fresh_lemon.png'
import sabao_ariel from './components/product/images/limpeza/sabao_ariel.png'

const fruit = [
	{
        id: 1,
        name: 'Pera 200 g',
        image: pera,
		stockAmount: 10,
        price: 6.98,
        discount: 0.05
    },
    {
        id: 2,
        name: 'Maçã 200 g',
        image: maca,
		stockAmount: 10,
        price: 6.98,
        discount: 0
    },
    {
        id: 3,
        name: 'Banana 350 g',
        image: banana,
		stockAmount: 10,
        price: 6.98,
        discount: 0.20
    },
    {
        id: 4,
        name: 'Melancia 8 kg (un.)',
        image: melancia,
		stockAmount: 10,
        price: 32.20,
        discount: 0.05
    },
    {
        id: 5,
        name: 'Melão 2 kg (un.)',
        image: melao,
		stockAmount: 10,
        price: 16.98,
        discount: 0
    },
    {
        id: 6,
        name: 'Morango 250 g',
        image: morango,
		stockAmount: 10,
        price: 14.98,
        discount: 0.20
    },
]

const coldCut = [
	{
        id: 9,
        name: 'Presunto cozido Sadia 180 g',
        image: presunto_cozido_sadia,
		stockAmount: 10,
        price: 6.98,
        discount: 0.05
    },
    {
        id: 10,
        name: 'Queijo minas (padrão) light fracionado',
        image: queijo_minas_light_tirolez,
		stockAmount: 10,
        price: 6.98,
        discount: 0
    },
]

const bread = [
    {
        id: 7,
        name: 'Pão de fôrma tradicional Pullman 500 g',
        image: pao_de_forma_pullman,
		stockAmount: 10,
        price: 6.98,
        discount: 0
    },
    {
        id: 8,
        name: 'Pão de forma premium Panco 500 g',
        image: pao_de_forma_panco,
		stockAmount: 10,
        price: 6.98,
        discount: 0.20
    },
]

const canned = [
	{
		id: 14,
		name: 'Atum Sólido em Óleo Gomes da Costa (un.)',
		image: atum_solido_gomes_da_costa,
		stockAmount: 10,
		price: 5.12,
		discount: 0
	},
	{
		id: 19,
		name: 'Sardinhas com Óleo Coqueiro (un.)',
		image: sardinha_coqueiro,
		stockAmount: 10,
		price: 5.12,
		discount: 0
	},
]

const grain = [
	{
		id: 13,
		name: 'Arroz Branco Tipo 1 Camil 5 kg',
		image: arroz_branco_camil,
		stockAmount: 10,
		price: 5.12,
		discount: 0
	},
	{
		id: 24,
		name: 'Feijão Carioca Comum Camil 1 kg',
		image: feijao_carioca_camil,
		stockAmount: 10,
		price: 5.12,
		discount: 0
	},
	{
		id: 25,
		name: 'Arroz Parboilizado Camil 5 kg',
		image: arroz_parboilizado_camil,
		stockAmount: 10,
		price: 5.12,
		discount: 0
	},
	{
		id: 37,
		name: 'Arroz Integral Camil 1 kg',
		image: arroz_integral_camil,
		stockAmount: 10,
		price: 5.12,
		discount: 0
	},
]

const flour = [
	{
		id: 11,
		name: 'Farinha de trigo tradicional Dona Benta Tipo 1 1 kg',
		image: farinha_de_trigo_dona_benta,
		stockAmount: 10,
		price: 5.12,
		discount: 0
	},
	{
		id: 27,
		name: 'Farinha de Mandioca Fina Seca Yoki 500 g',
		image: farinha_mandioca_yoki,
		stockAmount: 10,
		price: 5.12,
		discount: 0
	},
]

const sugar = [
	{
		id: 12,
		name: 'Açúcar Granulado Refinado Premium Olho D\'Água 1 kg',
		image: acucar_olho_dagua,
		stockAmount: 10,
		price: 5.12,
		discount: 0
	},
	{
		id: 28,
		name: 'Açúcar Refinado União 1 kg',
		image: acucar_uniao,
		stockAmount: 10,
		price: 5.12,
		discount: 0
	},
	{
		id: 29,
		name: 'Açúcar Refinado Especial Caravelas 1 kg',
		image: acucar_caravelas,
		stockAmount: 10,
		price: 5.12,
		discount: 0
	},
]

const powdered = [
	{
		id: 15,
		name: 'Café instantâneo Nescafé 170 g',
		image: cafe_nescafe,
		stockAmount: 10,
		price: 5.12,
		discount: 0
	},
	{
		id: 16,
		name: 'Leite em Pó Ninho 400 g',
		image: leite_em_po_ninho,
		stockAmount: 10,
		price: 5.12,
		discount: 0
	},
	{
		id: 20,
		name: 'Achocolatado Toddy original 400 g',
		image: toddy_achocolatado,
		stockAmount: 10,
		price: 5.12,
		discount: 0
	},
]

const pasta = [
	{
		id: 17,
		name: 'Macarrão Pena Renata 500 g',
		image: macarrao_pena_renata,
		stockAmount: 10,
		price: 5.12,
		discount: 0
	},
	{
		id: 30,
		name: 'Nissin Lámen Sabor Galinha 80 g (tempero 5 g)',
		image: macarrao_instantaneo_nissin,
		stockAmount: 10,
		price: 5.12,
		discount: 0
	},
]

const vegetableOil = [
	{
		id: 18,
		name: 'Óleo de Girassol Liza 900 mL',
		image: oleo_de_girassol_liza,
		stockAmount: 10,
		price: 5.12,
		discount: 0
	},
	{
		id: 48,
		name: 'Óleo de Milho Liza 900 mL',
		image: oleo_de_milho_liza,
		stockAmount: 10,
		price: 5.12,
		discount: 0
	},
]

const shampoo = [
	{
		id: 23,
		name: 'Shampoo Oxygen Moisture Dove 355 mL',
		image: shampoo_dove,
		stockAmount: 10,
		price: 5.12,
		discount: 0
	},
	{
		id: 44,
		name: 'Shampoo Johnson\'s Baby com água purificada 200 mL',
		image: shampoo_johnson,
		stockAmount: 10,
		price: 5.12,
		discount: 0
	},
]

const soap = [
	{
		id: 22,
		name: 'Sabonete Original Dove 90 g',
		image: sabonete_dove,
		stockAmount: 10,
		price: 5.12,
		discount: 0
	},
	{
		id: 31,
		name: 'Sabonete Johnson\'s Óleo de Amêndoas 90 g',
		image: sabonete_johnson,
		stockAmount: 10,
		price: 5.12,
		discount: 0
	},
	{
		id: 32,
		name: 'Sabonete Lux Buquê de Jasmim 85 g',
		image: sabonete_lux,
		stockAmount: 10,
		price: 5.12,
		discount: 0
	},
	{
		id: 33,
		name: 'Sabonete Leite com Hidratante Nivea 125 g',
		image: sabonete_nivea,
		stockAmount: 10,
		price: 5.12,
		discount: 0
	},
]

const toothpaste = [
	{
		id: 21,
		name: 'Pasta de Dente Sorriso 90 g',
		image: pasta_de_dente_sorriso,
		stockAmount: 10,
		price: 5.12,
		discount: 0
	},
	{
		id: 34,
		name: 'Pasta de Dente Oral-B Pro-Expert',
		image: pasta_de_dente_oralb,
		stockAmount: 10,
		price: 5.12,
		discount: 0
	},
	{
		id: 35,
		name: 'Pasta de Dente Colgate Max Fresh 170 g',
		image: pasta_de_dente_colgate,
		stockAmount: 10,
		price: 5.12,
		discount: 0
	},
]

const toiletPaper = [
	{
		id: 50,
		name: 'Papel Higiênico Neutro Folha Dupla Neve (4 x 30 m)',
		image: papel_higienico_neve,
		stockAmount: 10,
		price: 5.12,
		discount: 0
	},
	{
		id: 36,
		name: 'Papel Higiênico Ultra Folha Dupla Elite (4 x 30 m)',
		image: papel_higienico_elite,
		stockAmount: 10,
		price: 5.12,
		discount: 0
	},
]

const cleaning = [
	{
		id: 38,
		name: 'Água Sanitária Ypê Cloro Ativo 3 2 L',
		image: agua_sanitaria_ype,
		stockAmount: 10,
		price: 5.12,
		discount: 0
	},
	{
		id: 39,
		name: 'Ajax Fresh Lemon 500 mL',
		image: ajax_fresh_lemon,
		stockAmount: 10,
		price: 5.12,
		discount: 0
	},
	{
		id: 40,
		name: 'Sabão Para Roupas Concentrado Ariel 630 mL',
		image: sabao_ariel,
		stockAmount: 10,
		price: 5.12,
		discount: 0
	},
]

const productsData = [
	...fruit, ...coldCut, ...bread, ...canned, ...grain, ...flour, ...sugar,
	...powdered, ...pasta, ...vegetableOil, ...shampoo, ...soap,
	...toothpaste, ...toiletPaper, ...cleaning
]

export default productsData;

export const sections = [
	{
		title: 'Para sua sobrevivência',
		content: [...grain, ...pasta, ...bread, ...canned, ...powdered, ...coldCut],
		categories: ['nonPerishable']
	},
	{
		title: 'Mantenha-se limpo',
		content: [...toiletPaper, ...toothpaste, ...soap, ...shampoo],
		categories: ['hygiene']
	},
	{
		title: 'Para cuidar do seu lar',
		content: [...cleaning],
		categories: ['cleaning']
	},
	{
		title: 'Para você, chef',
		content: [...vegetableOil, ...flour, ...sugar, ...pasta],
		categories: ['nonPerishable']
	},
	{
		title: 'Perfeitos para os amantes de massa',
		content: [...pasta, ...bread],
		categories: ['nonPerishable']
	},
	{
		title: 'Ah, que frios...',
		content: [...coldCut],
		categories: ['perishable']
	},
	{
		title: 'Porque saúde é importante',
		content: [...fruit],
		categories: ['perishable']
	}
]

export const productsOnSale = productsData.filter(p => p.discount > 0)
export const sectionsPerishable = sections.filter(s => s.categories.includes('perishable'))
export const sectionsNonPerishable = sections.filter(s => s.categories.includes('nonPerishable'))
export const sectionsCleaning = sections.filter(s => s.categories.includes('cleaning'))
export const sectionsHygiene = sections.filter(s => s.categories.includes('hygiene'))