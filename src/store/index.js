import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
    state() {
        return {
            pronostics: [{ "id": 1, "name": "Match de dingue", "type": "FOOTBALL", "typeId": 1, "competition": "Ligue 1", "competitionId": 1, "analyse": "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq", "cote": 1.8, "resultat": "bon match de cette equipe", "res_prono": "1" }, { "id": 2, "name": "Match ouf", "type": "TENNIS", "typeId": 2, "competition": "ATP Sydney", "competitionId": 2, "analyse": "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq", "cote": 1.3, "resultat": "bon match de se joueur", "res_prono": "2" }, { "id": 3, "name": "Match de dingue", "type": "BASKETBALL", "typeId": 3, "competition": "Serie A", "competitionId": 3, "analyse": "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq", "cote": 1.6, "resultat": "bon match de cette equipe mais match nulle", "res_prono": "N" }, { "id": 4, "name": "Match de dingue 1", "type": "FOOTBALL", "typeId": 1, "competition": "Serie A", "competitionId": 3, "analyse": "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq", "cote": 1.9, "resultat": "bon match de cette equipe", "res_prono": "2" }],
        };
    },
    mutations: {
        setPronostics(state, pronosticsData) {
            state.pronostics = pronosticsData;
        },
        setPronosticsBySport(state, pronosticsData) {
            state.pronosticsBySport = pronosticsData;
        },
        setPronosticsById(state, pronosticsData) {
            state.pronosticsById = pronosticsData;
        },
        setCompets(state, pronosticsData) {
            state.compets = pronosticsData;
        },
        setCompetitions(state, pronosticsData) {
            state.competitions = pronosticsData;
        },
        setTypes(state, pronosticsData) {
            state.types = pronosticsData;
        },
    },
    actions: {
        getAllPronostics(context) {
            axios.get("http://raxk1131.odns.fr/pronostics")
                .then(reponse => {
                    context.commit("setPronostics", reponse.data)
                });
        },
        getAllTypes(context) {
            axios.get("http://raxk1131.odns.fr/types")
                .then(reponse => {
                    context.commit("setTypes", reponse.data)
                });
        },
        getAllCompetitions(context) {
            console.log('wop');
            axios.get("http://raxk1131.odns.fr/competitions")
                .then(reponse => {
                    context.commit("setCompetitions", reponse.data)
                });
        },
        getPronosticByCategory(context) {
            axios.get("http://raxk1131.odns.fr/types/1/pronostics")
                .then(reponse => {
                    context.commit("setPronosticsBySport", reponse.data)
                });
        },
        getPronosticById(context) {
            axios.get("http://raxk1131.odns.fr/pronostics/1")
                .then(reponse => {
                    context.commit("setPronosticsById", reponse.data)
                });
        }
    },
    getters: {
        pronostics(state) {
            return state.pronostics;
        },
        pronosticsTypes(state) {
            return state.types;
        },
        pronosticsCompetitions(state) {
            return state.competitions;
        },
        pronosticsBySport(state) {
            return state.pronosticsBySport;
        },
        pronosticById(state) {
            return state.pronosticsById;
        },
        pronosticId(state) {
            return (pronosticId) => {
                return state.pronostics.find((item) => item.id == pronosticId);
            }
        }
    }
});

export default store;