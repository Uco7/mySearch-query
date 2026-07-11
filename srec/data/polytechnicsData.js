/**
 * polytechnicsData.js
 * ---------------------------------------------------------------------------
 * Same shape as universitiesData.js (slug, name, state, location, founded,
 * website, popularCourses) so it can be rendered with the exact same profile
 * template. Founding years and locations are stable facts; verify website
 * URLs occasionally since polytechnic sites change domains more often than
 * universities do.
 *
 * This is a starter list of well-known federal & state polytechnics — add
 * more objects following the same shape. `category`/`ownership` are applied
 * automatically at the bottom, same pattern as universitiesData.js.
 */

const federalPolytechnics = [
  {
    slug: "yabatech", name: "Yaba College of Technology", abbreviation: "YABATECH",
    state: "Lagos", location: "Yaba, Lagos State", founded: 1947,
    website: "https://yabatech.edu.ng",
    schools: ["Engineering", "Environmental Studies", "Management & Business Studies", "Science", "Technology"],
    popularCourses: ["Civil Engineering", "Computer Science", "Estate Management", "Mass Communication", "Accountancy"]
  },
  {
    slug: "fedpolyilaro", name: "Federal Polytechnic Ilaro", abbreviation: "FEDPOLYILARO",
    state: "Ogun", location: "Ilaro, Ogun State", founded: 1979,
    website: "https://federalpolyilaro.edu.ng",
    schools: ["Business & Management Studies", "Engineering", "Environmental Studies", "Science"],
    popularCourses: ["Accountancy", "Computer Science", "Civil Engineering", "Mass Communication"]
  },
  {
    slug: "fpno", name: "Federal Polytechnic Nekede", abbreviation: "FPNO",
    state: "Imo", location: "Nekede, Owerri, Imo State", founded: 1978,
    website: "https://fpno.edu.ng",
    schools: ["Business Studies", "Engineering", "Environmental Studies", "Science"],
    popularCourses: ["Mechanical Engineering", "Computer Science", "Statistics", "Accountancy"]
  },
  {
    slug: "kadpoly", name: "Kaduna Polytechnic", abbreviation: "KADPOLY",
    state: "Kaduna", location: "Kaduna, Kaduna State", founded: 1956,
    website: "https://kadunapolytechnic.edu.ng",
    schools: ["Applied Sciences", "Business Studies", "Engineering Technology", "Environmental Studies"],
    popularCourses: ["Electrical Engineering", "Architecture", "Mass Communication", "Accountancy"]
  },
  {
    slug: "abupoly", name: "Auchi Polytechnic", abbreviation: "AUCHIPOLY",
    state: "Edo", location: "Auchi, Edo State", founded: 1973,
    website: "https://auchipoly.edu.ng",
    schools: ["Business Studies", "Engineering", "Environmental Studies", "General Studies"],
    popularCourses: ["Civil Engineering", "Estate Management", "Banking & Finance", "Computer Science"]
  }
].map(p => ({ ...p, category: "Federal Polytechnic", ownership: "Federal Government" }));

const statePolytechnics = [
  {
    slug: "laspotech", name: "Lagos State Polytechnic", abbreviation: "LASPOTECH",
    state: "Lagos", location: "Ikorodu, Lagos State", founded: 1977,
    website: "https://laspotech.edu.ng",
    schools: ["Business & Financial Studies", "Engineering", "Environmental Studies", "Science"],
    popularCourses: ["Accountancy", "Civil Engineering", "Mass Communication", "Computer Science"]
  },
  {
    slug: "ospoly", name: "Osun State Polytechnic, Iree", abbreviation: "OSPOLY",
    state: "Osun", location: "Iree, Osun State", founded: 1985,
    website: "https://ospoly.edu.ng",
    schools: ["Business Studies", "Engineering", "Environmental Studies", "Science"],
    popularCourses: ["Computer Science", "Accountancy", "Estate Management", "Civil Engineering"]
  }
].map(p => ({ ...p, category: "State Polytechnic", ownership: "State Government" }));

module.exports = [...federalPolytechnics, ...statePolytechnics];
