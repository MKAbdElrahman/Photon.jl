export setϵᵣ! ,  setμᵣ! , setmaterial! 
export Material
struct ϵᵣ end
struct μᵣ end

const  setϵᵣ! =  ϵᵣ()
const  setμᵣ! =  μᵣ()


struct SetMaterial end
const setmaterial! = SetMaterial()

struct Material{T1,T2,T3}
    ϵr_xx::T1
    ϵr_yy::T2
    ϵr_zz::T3
end

function (sim::Simulation)(setmaterial!, mat::Material, region::Function)
    sim(setϵᵣ!,x̂,x -> mat.ϵr_xx,region)
    sim(setϵᵣ!,ŷ,x -> mat.ϵr_yy,region)
    sim(setϵᵣ!,ẑ,x -> mat.ϵr_zz,region)
end



function get_ϵ_comp(sim::Simulation{Dim},  dir::Direction{D}) where {D,Dim}
	if D == 1 return sim.ϵᵣ_xx end
	if D == 2 return sim.ϵᵣ_yy end
	if D == 3 return sim.ϵᵣ_zz end
end

function get_μ_comp(sim::Simulation{Dim},  dir::Direction{D}) where {D,Dim}
	if D == 1 return sim.μᵣ_xx end
	if D == 2 return sim.μᵣ_yy end
	if D == 3 return sim.μᵣ_zz end
end	

function (sim::Simulation)(::ϵᵣ,dir::Direction,val::Function, reg::Function = (x -> true) , gridtype::GridType= p̂) 
sim(set!, get_ϵ_comp(sim,  dir),val,reg,gridtype)	
end		

function (sim::Simulation)(::μᵣ,dir::Direction,val::Function, reg::Function = (x -> true) , gridtype::GridType= p̂) 
sim(set!, get_μ_comp(sim,  dir),val,reg,gridtype)	
end		
