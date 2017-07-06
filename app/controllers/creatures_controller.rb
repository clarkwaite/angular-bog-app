class CreaturesController < ApplicationController
  before_action :set_creature, only: [:show, :edit, :update, :destroy]

  # GET /creatures
  # GET /creatures.json
  def index
    @creatures = Creature.all
    render json: @creatures
  end

  # GET /creatures/1
  # GET /creatures/1.json
  def show
    @creature = Creature.find(params[:id])
    render json: @creature
  end

  # POST /creatures
  # POST /creatures.json
  def create
    
    @creature = Creature.new(creature_params)

    respond_to do |format|
      if @creature.save
        format.html { redirect_to @creature, notice: 'Creature was successfully created.' }
        format.json { render :show, status: :created, location: @creature }
      else
        format.html { render :new }
        format.json { render json: @creature.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /creatures/1
  # PATCH/PUT /creatures/1.json
  def update
    
      if @creature.update(creature_params)
        render json: :show, status: :ok, location: @creature
      else
        render json: @creature.errors
      end
  end

  # DELETE /creatures/1
  # DELETE /creatures/1.json
  def destroy
    
    @creature.destroy
    respond_to do |format|
      format.html { redirect_to creatures_url, notice: 'Creature was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_creature
      @creature = Creature.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def creature_params
      params.require(:creature).permit(:name, :description)
    end
end
