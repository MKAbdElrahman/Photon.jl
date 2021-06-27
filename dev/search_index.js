var documenterSearchIndex = {"docs":
[{"location":"autodocs/autodocs/#Automatic-Documentations","page":"Automatic Documentations","title":"Automatic Documentations","text":"","category":"section"},{"location":"autodocs/autodocs/","page":"Automatic Documentations","title":"Automatic Documentations","text":"Modules = [Photon]","category":"page"},{"location":"autodocs/autodocs/#Base.IteratorsMD.CartesianIndex-Union{Tuple{ND}, Tuple{Grid{ND}, Photon.GridType{:Dual}, Tuple{Vararg{Number, ND}}}} where ND","page":"Automatic Documentations","title":"Base.IteratorsMD.CartesianIndex","text":"CartesianIndex(g::Grid{ND},::GridType{:Dual},  coordinate::NTuple{ND,Number}) where ND\n\nReturns the equivalent dualCartesianIndex of a coordinate.\n\n\n\n\n\n","category":"method"},{"location":"autodocs/autodocs/#Photon.Coordinate-Tuple{Grid, Photon.GridType{:Dual}, CartesianIndex}","page":"Automatic Documentations","title":"Photon.Coordinate","text":"Coordinate(g::Grid ,::GridType{:Dual},Ind::CartesianIndex)\n\nReturns the equivalent dual coordinate of of a CartesianIndex.\n\nThe function doesnot chack for being inside the grid.\t\n\n\n\n\n\n","category":"method"},{"location":"autodocs/autodocs/#Photon.Coordinate-Tuple{Grid, Photon.GridType{:Primal}, CartesianIndex}","page":"Automatic Documentations","title":"Photon.Coordinate","text":"Coordinate(g::Grid , ::GridType{:Primal}, Ind::CartesianIndex)\n\nReturns the equivalent primal coordinate of of a CartesianIndex.\n\nThe function doesnot chack for being inside the grid.\t\n\n\n\n\n\n","category":"method"},{"location":"autodocs/autodocs/#Photon.Coordinates-Union{Tuple{T}, Tuple{Grid, Photon.GridType{T}, CartesianIndices}} where T","page":"Automatic Documentations","title":"Photon.Coordinates","text":" Coordinates(g::Grid,gridtype::GridType{T},CIns::CartesianIndices ) where T\n\nReturns the primal or dual coordinates of a set of cartesian indecies.\n\n\n\n\n\n","category":"method"},{"location":"autodocs/autodocs/#Photon.Coordinates-Union{Tuple{T}, Tuple{Grid, Photon.GridType{T}}} where T","page":"Automatic Documentations","title":"Photon.Coordinates","text":"  Coordinates(g::Grid,gridtype::GridType{T}) where T\n\nReturns the primal or dual coordinates of all points on a grid.\n\n\n\n\n\n","category":"method"},{"location":"basics/overview/#Overview","page":"Overview","title":"Overview","text":"","category":"section"},{"location":"tutorials/example_1/#Scattering-From-A-2D-Disk","page":"Scattering From A 2D-Disk","title":"Scattering From A 2D-Disk","text":"","category":"section"},{"location":"basics/grid/#Defining-Grids","page":"Defining Grids","title":"Defining Grids","text":"","category":"section"},{"location":"basics/grid/","page":"Defining Grids","title":"Defining Grids","text":"In order to initialize a simulation, you have to define a grid upon which all computations will be done. Currently, Cartesian grids, with uniform spacing along each dimension are supported.","category":"page"},{"location":"basics/grid/","page":"Defining Grids","title":"Defining Grids","text":"Grids are defined by using the Grid constructor which must take as input two keword arguments:","category":"page"},{"location":"basics/grid/","page":"Defining Grids","title":"Defining Grids","text":"spacing = (dx,dy,..): the cell sizes for  each dimension. \nextent = (Lx,Ly,..):  the grid length for each dimension.","category":"page"},{"location":"basics/grid/","page":"Defining Grids","title":"Defining Grids","text":"spacing and extent mush have the same length. ","category":"page"},{"location":"basics/grid/#Examples:","page":"Defining Grids","title":"Examples:","text":"","category":"section"},{"location":"basics/grid/#D-Grid","page":"Defining Grids","title":"1D Grid","text":"","category":"section"},{"location":"basics/grid/","page":"Defining Grids","title":"Defining Grids","text":"using Photon              # hide\nLx = 15 \ndx = 0.05\nGrid(extent = (Lx,) , spacing = (dx,) )","category":"page"},{"location":"basics/grid/#D-Grid-2","page":"Defining Grids","title":"2D Grid","text":"","category":"section"},{"location":"basics/grid/","page":"Defining Grids","title":"Defining Grids","text":"using Photon              # hide\nLx = 15\nLy = 7.5 \ndx = 0.05\ndy = 0.2\nGrid(extent = (Lx,Ly) , spacing = (dx,dy) )","category":"page"},{"location":"basics/grid/#D-Grid-3","page":"Defining Grids","title":"3D Grid","text":"","category":"section"},{"location":"basics/grid/","page":"Defining Grids","title":"Defining Grids","text":"using Photon              # hide\nLx = 15\nLy = 7.5\nLz = 4.5 \ndx = 0.05\ndy = 0.2\ndz = 0.1\nGrid(extent = (Lx,Ly,Lz) , spacing = (dx,dy,dz) )","category":"page"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = Photon","category":"page"},{"location":"#Photon","page":"Home","title":"Photon","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for Photon.","category":"page"},{"location":"#Getting-Started:-Installation-And-First-Steps","page":"Home","title":"Getting Started: Installation And First Steps","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"To install the package, use the following command inside the Julia REPL:","category":"page"},{"location":"","page":"Home","title":"Home","text":"using Pkg\nPkg.add(\"https://github.com/MKAbdElrahman/Photon.jl\")","category":"page"},{"location":"","page":"Home","title":"Home","text":"To load the package, use the command:","category":"page"},{"location":"","page":"Home","title":"Home","text":"using Photon","category":"page"},{"location":"#Tutorials","page":"Home","title":"Tutorials","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"The following tutorials will introduce you to the functionality of Photon.jl.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Pages = [\n    \"tutorials/example_1.md\"\n    ]\nDepth = 2","category":"page"},{"location":"#Basics","page":"Home","title":"Basics","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"These pages introduce you to the core of Photon.jl and the common interface. It explains the general workflow, options which are generally available, and the general tools for analysis.","category":"page"},{"location":"","page":"Home","title":"Home","text":"Pages = [\n    \"basics/overview.md\",\n    \"basics/grid.md\",\n    ]\nDepth = 2","category":"page"},{"location":"#AutoDocs","page":"Home","title":"AutoDocs","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Pages = [\n    \"autodocs/autodocs.md\"\n    ]\nDepth = 2","category":"page"}]
}
