
using Photon

λ = 1.55;

Lx = 6 * λ; 
Ly = 6 * λ;

sim = Simulation(λ₀ = λ ;  grid = Grid(extent = (Lx,Ly) , spacing =  (λ/40,λ/40) ))

sim(setpml!,λ)


sim(setsrc!, PlaneWave(k̂ = (0,2pi/λ), ê = (0,0,1)))
sim(contourplot,:J,ẑ, real ; xlabel = "x-axis", ylabel = "y-axis", title = "Ez")


sim(setTFSF! ,1.5λ)


material = Material(ϵᵣ = 13.491 + 0.036730im )

Disk(x) = sqrt((x[1]-Lx/2)^2 + (x[2]-Ly/2)^2)  <=  1.2 

sim(setmaterial!,material,Disk)

sim(contourplot,  :ϵᵣ, x̂ , real ; xlabel = "x-axis", ylabel = "y-axis", title = "ϵ x")


Ex,Ey,Ez  = sim(solve_with_FDFD,using_direct_solver)

sim(contourplot,Ez, abs ; xlabel = "x-axis", ylabel = "y-axis", title = "Ez")

import LinearAlgebra: norm
objective(Ex,Ey,Ez) = 0*norm(Ex) +  norm(Ez) +  0*norm(Ey)
(sens_x,sens_y,sens_z) = sim(sensitivity,objective, using_direct_solver)

sim(contourplot,sens_z, real ; xlabel = "x-axis", ylabel = "y-axis", title = "sens_x")

